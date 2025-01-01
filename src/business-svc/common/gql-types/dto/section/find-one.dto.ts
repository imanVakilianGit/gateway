import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class FindOneSectionInput {
    @Field(() => Int)
    id: number;
}
