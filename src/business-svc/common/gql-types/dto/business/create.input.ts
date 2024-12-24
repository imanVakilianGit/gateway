import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
class BusinessOptionsInput {
    @Field()
    title: string;

    @Field()
    value: string;
}

@InputType()
export class CreateBusinessInput {
    @Field(() => Int)
    businessCategoryId: number;

    @Field()
    name: string;

    @Field(() => [BusinessOptionsInput])
    options: BusinessOptionsInput[];

    @Field(() => [BusinessOptionsInput])
    extraOptions: BusinessOptionsInput[];
}
