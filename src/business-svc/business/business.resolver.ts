import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { Request } from 'express';

import { BusinessService } from './business.service';
import { CreateBusinessInput } from '../common/gql-types/dto/business/create.input';
import { FindAllBusinessesInput } from '../common/gql-types/dto/business/find-all.input';
import { FindOneBusinessInput } from '../common/gql-types/dto/business/find-one.input';
import { FindOneBusinessBySlugInput } from '../common/gql-types/dto/business/find-one-by-slug.input';
import { UpdateBusinessInput } from '../common/gql-types/dto/business/update.input';
import { UserAuthGuard } from '../../user-svc/common/guard/auth.guard';
import {
    CreateBusinessResponse,
    FindAllBusinessesResponse,
    FindOneBusinessBySlugResponse,
    FindOneBusinessResponse,
    UpdateBusinessResponse,
} from '../common/gql-types/response-types/business.response-type';

@Resolver()
export class BusinessResolver {
    constructor(private readonly businessService: BusinessService) {}

    @UseGuards(UserAuthGuard)
    @Mutation(() => CreateBusinessResponse)
    async createBusiness(@Args('dto') dto: CreateBusinessInput, @Context() { req }: { req: Request }) {
        try {
            const result = await this.businessService.create({ ...dto, userId: req.user?.id });
            return result;
        } catch (error) {
            throw error;
        }
    }

    @Query(() => FindAllBusinessesResponse)
    async findAllBusinesses(@Args('dto') dto: FindAllBusinessesInput) {
        try {
            const result = await this.businessService.findAll(dto);
            return result;
        } catch (error) {
            throw error;
        }
    }

    @Query(() => FindOneBusinessResponse)
    async findOneBusiness(@Args('dto') dto: FindOneBusinessInput) {
        try {
            const result = await this.businessService.findOne(dto);
            return result;
        } catch (error) {
            throw error;
        }
    }

    @Query(() => FindOneBusinessBySlugResponse)
    async findOneBusinessBySlug(@Args('dto') dto: FindOneBusinessBySlugInput) {
        try {
            const result = await this.businessService.findOneBySlug(dto);
            return result;
        } catch (error) {
            throw error;
        }
    }

    @UseGuards(UserAuthGuard)
    @Mutation(() => UpdateBusinessResponse)
    async updateBusiness(@Args('dto') dto: UpdateBusinessInput) {
        try {
            const result = await this.businessService.update(dto);
            return result;
        } catch (error) {
            throw error;
        }
    }
}
