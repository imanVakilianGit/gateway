import { ObjectType, Field } from '@nestjs/graphql';

import { BaseResponse } from '../../../../common/gql-types/response-type/base-response.response-type';
import { SectionEntity, SectionsEntity } from '../entity/section.entity';

@ObjectType({ implements: BaseResponse })
export class CreateSectionResponse extends BaseResponse {
    @Field(() => SectionEntity, { nullable: true })
    data?: SectionEntity;
}

@ObjectType({ implements: BaseResponse })
export class FindAllSectionsByManagerResponse extends BaseResponse {
    @Field(() => SectionsEntity, { nullable: true })
    data?: SectionsEntity;
}

@ObjectType({ implements: BaseResponse })
export class FindOneSectionResponse extends BaseResponse {
    @Field(() => SectionEntity, { nullable: true })
    data?: SectionEntity;
}

@ObjectType({ implements: BaseResponse })
export class FindOneSectionByCodeResponse extends BaseResponse {
    @Field(() => SectionEntity, { nullable: true })
    data?: SectionEntity;
}

@ObjectType({ implements: BaseResponse })
export class UpdateSectionResponse extends BaseResponse {
    @Field(() => SectionEntity, { nullable: true })
    data?: SectionEntity;
}

@ObjectType({ implements: BaseResponse })
export class ActivationToggleSectionResponse extends BaseResponse {
    @Field(() => SectionEntity, { nullable: true })
    data?: SectionEntity;
}
