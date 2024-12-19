import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserLoginByEmailInput {
    @Field()
    email: string;
}
