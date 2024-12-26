import { ObjectType, Field } from '@nestjs/graphql';

import { BaseResponse } from '../../../../common/gql-types/response-type/base-response.response-type';
import { BranchEntity } from '../entity/branch.entity';

@ObjectType({ implements: BaseResponse })
export class CreateBranchResponse extends BaseResponse {
    @Field(() => BranchEntity, { nullable: true })
    data?: BranchEntity;
}
