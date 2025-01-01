import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateSectionInput {
    @Field(() => Int)
    id: number;

    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    description?: string;
}
