import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserConfirmLoginInput {
    @Field()
    otpCode: string;

    @Field()
    receiver: string;
}
