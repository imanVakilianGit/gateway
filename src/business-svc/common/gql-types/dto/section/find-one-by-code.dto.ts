import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FindOneSectionByCodeInput {
    @Field()
    code: string;
}
