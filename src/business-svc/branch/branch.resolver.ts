import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { Request } from 'express';
import { UseGuards } from '@nestjs/common';

import { BranchService } from './branch.service';
import { CreateBranchInput } from '../common/gql-types/dto/branch/create.dto';
import { CreateBranchResponse } from '../common/gql-types/response-types/branch.response-type';
import { EntityGuard } from '../../common/decorator/entity-guard.decorator';
import { UserAuthGuard } from '../../common/guard/user-auth.guard';

@UseGuards(UserAuthGuard)
@Resolver()
export class BranchResolver {
    constructor(private readonly branchService: BranchService) {}

    @EntityGuard({ employee: { shouldExist: true, isActive: true }, manager: { shouldExist: true, isActive: true } })
    @Mutation(() => CreateBranchResponse)
    async createBranch(@Args('dto') dto: CreateBranchInput, @Context() { req }: { req: Request }) {
        try {
            console.log('=================== user ========================');
            console.log(req.user);
            console.log('=================== employee ========================');
            console.log(req.employee);
            console.log('=================== manager ========================');
            console.log(req.manager);
            const result = await this.branchService.create({ ...dto, managerId: req.manager?.id, businessId: req.employee?.business_id });
            return result;
        } catch (error) {
            throw error;
        }
    }
}
