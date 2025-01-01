import { ObjectType, Field, Int } from '@nestjs/graphql';

import { BusinessEntity } from './business.entity';
import { PaginationResponse } from '../../../../common/gql-types/response-type/pagination.response-type';
import { EmployeeEntity, ManagerEntity } from './employee.entity';
import { BranchEntity } from './branch.entity';

@ObjectType()
export class SectionEntity {
    @Field(() => Int)
    id: number;

    @Field(() => Date)
    created_at: Date;

    @Field(() => Date)
    updated_at: Date;

    @Field(() => Int, { nullable: true })
    manager_id?: number;

    @Field(() => Int)
    business_id: number;

    @Field(() => Int)
    branch_id: number;

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

    @Field(() => BranchEntity, { nullable: true })
    branch?: BranchEntity;

    @Field(() => [EmployeeEntity], { nullable: 'itemsAndList' })
    employees?: EmployeeEntity[];
}

@ObjectType()
export class SectionsEntity extends PaginationResponse {
    @Field(() => [SectionEntity], { nullable: 'items' })
    sections: SectionEntity[];
}
