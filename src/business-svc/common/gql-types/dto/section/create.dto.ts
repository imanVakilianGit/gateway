import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateSectionInput {
    @Field(() => Int)
    branchId: number;

    @Field()
    name: string;

    @Field()
    description: string;
}
