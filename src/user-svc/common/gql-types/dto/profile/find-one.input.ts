import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class FindOneUserProfileInput {
    @Field(() => Int)
    id: number;
}
