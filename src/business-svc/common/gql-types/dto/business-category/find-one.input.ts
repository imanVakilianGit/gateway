import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class FindOneBusinessCategoryInput {
    @Field(() => Int)
    id: number;
}
