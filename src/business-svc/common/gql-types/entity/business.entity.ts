import { ObjectType, Field, Int } from '@nestjs/graphql';

import { PaginationResponse } from '../../../../common/gql-types/response-type/pagination.response-type';

@ObjectType()
export class BusinessCategory {
    @Field()
    title: string;
}

@ObjectType()
class User {
    @Field(() => Int)
    id: number;

    @Field()
    first_name: string;

    @Field()
    last_name: string;

    @Field()
    email: string;
}

@ObjectType()
class Employee {
    @Field(() => Int)
    id: number;

    @Field(() => User)
    user: User;
}

@ObjectType()
class Manager {
    @Field(() => Int)
    id: number;

    @Field(() => Employee)
    employee: Employee;
}

@ObjectType()
export class BusinessOptionEntity {
    @Field(() => Int)
    id: number;

    @Field(() => Date, { nullable: true })
    created_at?: Date;

    @Field(() => Date, { nullable: true })
    updated_at?: Date;

    @Field()
    title: string;

    @Field()
    value: string;
}

@ObjectType()
export class BusinessExtraOptionEntity {
    @Field(() => Int)
    id: number;

    @Field(() => Date, { nullable: true })
    created_at?: Date;

    @Field(() => Date, { nullable: true })
    updated_at?: Date;

    @Field()
    title: string;

    @Field()
    value: string;
}

@ObjectType()
export class BusinessEntity {
    @Field(() => Int)
    id: number;

    @Field(() => Date)
    created_at: Date;

    @Field(() => Date)
    updated_at: Date;

    @Field(() => Int, { nullable: true })
    manager_id?: number;

    @Field()
    name: string;

    @Field()
    slug: string;

    @Field({ nullable: true })
    is_active?: boolean;

    @Field(() => Manager, { nullable: true })
    manager?: Manager;

    @Field(() => BusinessCategory, { nullable: true })
    business_category?: BusinessCategory;

    @Field(() => [BusinessOptionEntity], { nullable: true })
    options?: BusinessOptionEntity[];

    @Field(() => [BusinessExtraOptionEntity], { nullable: true })
    extra_options?: BusinessExtraOptionEntity[];
}

@ObjectType()
export class BusinessesEntity extends PaginationResponse {
    @Field(() => [BusinessEntity], { nullable: 'items' })
    businesses: BusinessEntity[];
}
