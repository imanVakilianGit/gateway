import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
class UpdateBusinessExtraOptionsInput {
    @Field(() => Int)
    id: number;

    @Field({ nullable: true })
    title?: string;

    @Field({ nullable: true })
    value?: string;
}

@InputType()
class UpdateBusinessOptionsInput {
    @Field(() => Int)
    id: number;

    @Field()
    value: string;
}

@InputType()
export class UpdateBusinessInput {
    @Field(() => Int)
    id: number;

    @Field({ nullable: true })
    name?: string;

    @Field(() => [UpdateBusinessOptionsInput], { nullable: 'itemsAndList' })
    options?: UpdateBusinessOptionsInput[];

    @Field(() => [UpdateBusinessExtraOptionsInput], { nullable: 'itemsAndList' })
    extraOptions?: UpdateBusinessExtraOptionsInput[];
}
