import { InputType, Field, IntersectionType } from '@nestjs/graphql';

import { PaginationInput } from '../../../../../common/gql-types/dto/pagination.input';
import { SortInput } from '../../../../../common/gql-types/dto/sort.input';

@InputType()
export class FindAllBusinessCategoriesInput extends IntersectionType(PaginationInput, SortInput) {
    @Field({ nullable: true })
    title?: string;
}
