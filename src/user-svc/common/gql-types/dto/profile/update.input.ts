import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateUserProfileInput {
    @Field(() => Int, { nullable: true })
    id: number;

    @Field({ nullable: true })
    firstName?: string;

    @Field({ nullable: true })
    lastName?: string;

    @Field(() => Date, { nullable: true })
    birthDate?: Date;
}
