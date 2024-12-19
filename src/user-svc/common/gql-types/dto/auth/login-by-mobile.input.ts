import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserLoginByMobileInput {
    @Field()
    mobileNumber: string;
}
