import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PaginationResponse } from '../../../../common/gql-types/response-type/pagination.response-type';

@ObjectType()
export class UserProfileEntity {
    @Field(() => Int)
    id: number;

    @Field(() => Date)
    created_at: Date;

    @Field(() => Date)
    updated_at: Date;

    @Field()
    national_code: string;

    @Field()
    mobile_number: string;

    @Field()
    email: string;

    @Field()
    first_name: string;

    @Field()
    last_name: string;

    @Field(() => Date)
    birth_date: Date;

    @Field()
    gender: string;

    @Field()
    active_status: string;
}

@ObjectType({ implements: PaginationResponse })
export class UserProfilesEntity extends PaginationResponse {
    @Field(() => [UserProfileEntity], { nullable: 'items' })
    profiles?: UserProfileEntity;
}
