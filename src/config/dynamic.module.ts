import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

export const dynamicModules = [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
        driver: ApolloFederationDriver,
        autoSchemaFile: {
            federation: 2,
            path: join(process.cwd(), 'gql/schema.gql'),
        },
        context: ({ req, res }) => ({ req, res }),
        playground: {
            settings: {
                'request.credentials': 'include',
            },
        },
        includeStacktraceInErrorResponses: false,

        // formatError: (formattedError, error: GraphQLError) => {
        formatError: (formattedError) => {
            console.log('🚀 ~ formattedError: ', formattedError);

            return {
                extensions: {
                    service: formattedError.extensions?.service || 'GATEWAY',
                    success: formattedError.extensions?.success || false,
                    statusCode: formattedError.extensions?.statusCode || 500,
                    code: formattedError.extensions?.code || '',
                    field: formattedError.extensions?.field || '',
                    message: formattedError.extensions?.message || 'request failed...try again later',
                },
                message: String(formattedError?.extensions?.message || 'request failed...try again later'),
            };
        },
        path: '/',
    }),
];
