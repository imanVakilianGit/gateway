import { ObjectType, Field, Int } from '@nestjs/graphql';

import { BusinessEntity } from './business.entity';
import { PaginationResponse } from '../../../../common/gql-types/response-type/pagination.response-type';
import { EmployeeEntity, ManagerEntity } from './employee.entity';

@ObjectType()
export class BranchEntity {
    @Field(() => Int)
    id: number;

    @Field(() => Date)
    created_at: Date;

    @Field(() => Date)
    updated_at: Date;

    @Field(() => Int)
    manager_id: number;

    @Field()
    name: string;

    @Field()
    code: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    is_active?: boolean;

    @Field(() => ManagerEntity, { nullable: true })
    manager?: ManagerEntity;

    @Field(() => BusinessEntity, { nullable: true })
    business?: BusinessEntity;

    @Field(() => [EmployeeEntity], { nullable: 'itemsAndList' })
    employees?: EmployeeEntity[];
}

@ObjectType()
export class BranchesEntity extends PaginationResponse {
    @Field(() => [BranchEntity], { nullable: 'items' })
    branches: BranchEntity[];
}
