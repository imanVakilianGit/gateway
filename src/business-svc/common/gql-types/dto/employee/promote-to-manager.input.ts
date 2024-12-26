import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class PromoteEmployeeToManagerInput {
    @Field(() => Int)
    employeeId: number;
}
