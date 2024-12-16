import { Field, Int, InterfaceType } from '@nestjs/graphql';

@InterfaceType()
export abstract class BaseResponse {
    @Field()
    service: string;

    @Field()
    success: boolean;

    @Field(() => Int)
    statusCode: number;

    @Field()
    message: string;

    @Field()
    code: string;
}
