import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ActivationToggleSectionInput {
    @Field(() => Int)
    id: number;

    @Field()
    isActive: boolean;
}
