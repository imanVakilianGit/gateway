import { Resolver, Mutation, Args } from '@nestjs/graphql';

import { CreateEmployeeInput } from '../common/gql-types/dto/employee/create.input';
import { EmployeeService } from './employee.service';
import { PromoteEmployeeToManagerInput } from '../common/gql-types/dto/employee/promote-to-manager.input';
import { CreateEmployeeResponse, PromoteEmployeeToManagerResponse } from '../common/gql-types/response-types/employee.response-type';

@Resolver()
export class EmployeeResolver {
    constructor(private readonly employeeService: EmployeeService) {}

    @Mutation(() => CreateEmployeeResponse)
    async createEmployee(@Args('dto') dto: CreateEmployeeInput) {
        try {
            const result = await this.employeeService.create(dto);
            return result;
        } catch (error) {
            throw error;
        }
    }

    @Mutation(() => PromoteEmployeeToManagerResponse)
    async promoteEmployeeToManager(@Args('dto') dto: PromoteEmployeeToManagerInput) {
        try {
            const result = await this.employeeService.promoteToManager(dto);
            return result;
        } catch (error) {
            throw error;
        }
    }
}
