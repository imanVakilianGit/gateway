import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PaginationResponse } from '../../../../common/gql-types/response-type/pagination.response-type';

@ObjectType()
class OptionsTemplate {
    @Field(() => Int)
    id: number;

    @Field(() => Date)
    created_at: Date;

    @Field(() => Date)
    updated_at: Date;

    @Field()
    title: string;

    @Field(() => Int)
    business_category_id: number;
}

@ObjectType()
export class BusinessCategoryEntity {
    @Field(() => Int)
    id: number;

    @Field(() => Date)
    created_at: Date;

    @Field(() => Date)
    updated_at: Date;

    @Field()
    title: string;

    @Field()
    slug: string;

    @Field({ nullable: true })
    description?: string;

    @Field(() => [OptionsTemplate], { nullable: 'itemsAndList' })
    options_template?: OptionsTemplate[];
}

@ObjectType()
export class BusinessCategoriesEntity extends PaginationResponse {
    @Field(() => [BusinessCategoryEntity], { nullable: 'items' })
    businessCategories: BusinessCategoryEntity[];
}
