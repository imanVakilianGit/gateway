import { InputType, Field } from '@nestjs/graphql';

@InputType()
class OptionTemplateInput {
    @Field()
    title: string;
}

@InputType()
export class CreateBusinessCategoryInput {
    @Field()
    title: string;

    @Field({ nullable: true })
    description?: string;

    @Field(() => [OptionTemplateInput])
    options: OptionTemplateInput[];
}
