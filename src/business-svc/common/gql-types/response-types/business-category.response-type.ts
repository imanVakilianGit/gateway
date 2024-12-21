import { ObjectType, Field } from '@nestjs/graphql';

import { BusinessCategoriesEntity, BusinessCategoryEntity } from '../entity/business-category.entity';
import { BaseResponse } from '../../../../common/gql-types/response-type/base-response.response-type';

@ObjectType({ implements: BaseResponse })
export class CreateBusinessCategoryResponse extends BaseResponse {
    @Field(() => BusinessCategoryEntity, { nullable: true })
    data?: BusinessCategoryEntity;
}

@ObjectType({ implements: BaseResponse })
export class FindAllBusinessCategoriesResponse extends BaseResponse {
    @Field(() => BusinessCategoriesEntity, { nullable: true })
    data?: BusinessCategoriesEntity;
}

@ObjectType({ implements: BaseResponse })
export class FindOneBusinessCategoryResponse extends BaseResponse {
    @Field(() => BusinessCategoryEntity, { nullable: true })
    data?: BusinessCategoryEntity;
}

@ObjectType({ implements: BaseResponse })
export class FindOneBusinessCategoryBySlugResponse extends BaseResponse {
    @Field(() => BusinessCategoryEntity, { nullable: true })
    data?: BusinessCategoryEntity;
}
