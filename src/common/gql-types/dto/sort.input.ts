import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SortInput {
    @Field({ nullable: true })
    sortBy?: string;

    @Field({ nullable: true })
    orderBy?: string;
}
