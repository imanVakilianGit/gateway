import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEmployeeInput {
    @Field(() => Int)
    userId: number;

    @Field(() => Int)
    businessId: number;

    @Field(() => Int, { nullable: true })
    branchId?: number;

    @Field(() => Int, { nullable: true })
    sectionId?: number;

    @Field(() => Int, { nullable: true })
    salary?: number;

    @Field()
    role: string;
}
