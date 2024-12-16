import { Field, Int, InterfaceType } from '@nestjs/graphql';

@InterfaceType()
export abstract class PaginationResponse {
    @Field(() => Int)
    totalCount: number;

    @Field(() => Int)
    totalPage: number;

    @Field(() => Int)
    limit: number;

    @Field(() => Int)
    page: number;

    @Field(() => Int)
    count: number;

    @Field({ nullable: true })
    sortBy?: string;

    @Field({ nullable: true })
    orderBy?: string;
}
