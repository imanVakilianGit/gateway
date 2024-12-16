import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProfileInput {
    @Field()
    nationalCode: string;

    @Field()
    mobileNumber: string;

    @Field()
    email: string;

    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field(() => Date)
    birthDate: Date;

    @Field()
    gender: string;
}
