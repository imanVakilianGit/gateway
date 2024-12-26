import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBranchInput {
    @Field()
    name: string;

    @Field()
    description: string;
}
