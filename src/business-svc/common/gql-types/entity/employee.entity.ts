import { ObjectType, Field, Int } from '@nestjs/graphql';

import { PaginationResponse } from '../../../../common/gql-types/response-type/pagination.response-type';
import { UserProfileEntity } from '../../../../user-svc/common/gql-types/entity/profile.entity';
import { BusinessEntity } from './business.entity';

@ObjectType()
export class EmployeeEntity {
    @Field(() => Int)
    id: number;

    @Field(() => Date)
    created_at: Date;

    @Field(() => Date)
    updated_at: Date;

    @Field()
    employee_code: string;

    @Field()
    role: string;

    @Field({ nullable: true })
    salary?: string;

    @Field(() => Date)
    started_at: Date;

    @Field(() => Date, { nullable: true })
    ended_at?: Date;

    @Field({ nullable: true })
    is_active?: boolean;

    @Field(() => UserProfileEntity, { nullable: true })
    user?: UserProfileEntity;

    @Field(() => BusinessEntity, { nullable: true })
    business?: BusinessEntity;

    // branch;
    // section;
}

@ObjectType()
export class ManagerEntity {
    @Field(() => Int)
    id: number;

    @Field(() => Date)
    created_at: Date;

    @Field(() => Date)
    updated_at: Date;

    @Field(() => Int)
    employee_id: number;

    @Field({ nullable: true })
    is_active?: boolean;

    @Field(() => Date)
    started_at: Date;

    @Field(() => Date, { nullable: true })
    ended_at?: Date;

    @Field(() => EmployeeEntity)
    employee: EmployeeEntity;
}

@ObjectType()
export class EmployeesEntity extends PaginationResponse {
    @Field(() => [EmployeeEntity], { nullable: 'items' })
    employees: EmployeeEntity[];
}
