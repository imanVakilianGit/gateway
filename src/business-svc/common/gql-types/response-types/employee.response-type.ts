import { ObjectType, Field } from '@nestjs/graphql';

import { BaseResponse } from '../../../../common/gql-types/response-type/base-response.response-type';
import { EmployeeEntity, ManagerEntity } from '../entity/employee.entity';

@ObjectType({ implements: BaseResponse })
export class CreateEmployeeResponse extends BaseResponse {
    @Field(() => EmployeeEntity, { nullable: true })
    data?: EmployeeEntity;
}

@ObjectType({ implements: BaseResponse })
export class PromoteEmployeeToManagerResponse extends BaseResponse {
    @Field(() => ManagerEntity, { nullable: true })
    data?: ManagerEntity;
}
