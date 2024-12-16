import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class FindAllUserProfilesInput {
    @Field(() => Int)
    exampleField: number;
}
