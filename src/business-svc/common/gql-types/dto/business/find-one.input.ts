import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class FindOneBusinessInput {
    @Field(() => Int)
    id: number;
}
