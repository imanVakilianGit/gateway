import { Global, Module } from '@nestjs/common';
import { ClientProxy, ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

import { BUSINESS_SVC_NAME, USER_SVC_NAME } from '../common/constants/microservices-name.constant';
import { BUSINESS_SVC_PORT_ENV, USER_SVC_PORT_ENV } from '../common/constants/environments-name.constant';
import { BUSINESS_SVC_CLIENT_PROXY_NAME, USER_SVC_CLIENT_PROXY_NAME } from '../common/constants/microservices-client-name.constant';

@Global()
@Module({
    imports: [
        ClientsModule.registerAsync({
            clients: [
                {
                    name: USER_SVC_NAME,
                    useFactory: (configService: ConfigService) => {
                        return {
                            transport: Transport.TCP,
                            options: {
                                port: configService.get<number>(USER_SVC_PORT_ENV),
                            },
                        };
                    },
                    inject: [ConfigService],
                },
                {
                    name: BUSINESS_SVC_NAME,
                    useFactory: (configService: ConfigService) => {
                        return {
                            transport: Transport.TCP,
                            options: {
                                port: configService.get<number>(BUSINESS_SVC_PORT_ENV),
                            },
                        };
                    },
                    inject: [ConfigService],
                },
            ],
        }),
    ],
    providers: [
        {
            provide: USER_SVC_CLIENT_PROXY_NAME,
            useFactory: (client: ClientProxy) => {
                return client;
            },
            inject: [USER_SVC_NAME],
        },
        {
            provide: BUSINESS_SVC_CLIENT_PROXY_NAME,
            useFactory: (client: ClientProxy) => {
                return client;
            },
            inject: [BUSINESS_SVC_NAME],
        },
    ],
    exports: [USER_SVC_CLIENT_PROXY_NAME, BUSINESS_SVC_CLIENT_PROXY_NAME],
})
export class MicroservicesModule {}
