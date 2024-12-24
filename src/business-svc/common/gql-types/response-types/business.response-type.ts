import { ObjectType, Field } from '@nestjs/graphql';

import { BaseResponse } from '../../../../common/gql-types/response-type/base-response.response-type';
import { BusinessEntity, BusinessesEntity } from '../entity/business.entity';

@ObjectType({ implements: BaseResponse })
export class CreateBusinessResponse extends BaseResponse {
    @Field(() => BusinessEntity, { nullable: true })
    data?: BusinessEntity;
}

@ObjectType({ implements: BaseResponse })
export class FindAllBusinessesResponse extends BaseResponse {
    @Field(() => BusinessesEntity, { nullable: true })
    data?: BusinessesEntity;
}

@ObjectType({ implements: BaseResponse })
export class FindOneBusinessResponse extends BaseResponse {
    @Field(() => BusinessEntity, { nullable: true })
    data?: BusinessEntity;
}

@ObjectType({ implements: BaseResponse })
export class FindOneBusinessBySlugResponse extends BaseResponse {
    @Field(() => BusinessEntity, { nullable: true })
    data?: BusinessEntity;
}

@ObjectType({ implements: BaseResponse })
export class UpdateBusinessResponse extends BaseResponse {
    @Field(() => BusinessEntity, { nullable: true })
    data?: BusinessEntity;
}
