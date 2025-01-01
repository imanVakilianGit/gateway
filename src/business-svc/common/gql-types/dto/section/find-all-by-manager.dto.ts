import { Field, InputType } from '@nestjs/graphql';
import { PaginationInput } from '../../../../../common/gql-types/dto/pagination.input';

@InputType()
export class FindAllSectionsByManagerInput extends PaginationInput {
    @Field({ nullable: true })
    name?: string;
}
