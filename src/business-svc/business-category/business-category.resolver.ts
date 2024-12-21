import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { BusinessCategoryService } from './business-category.service';
import { CreateBusinessCategoryInput } from '../common/gql-types/dto/business-category/create.input';
import { FindAllBusinessCategoriesInput } from '../common/gql-types/dto/business-category/find-all.input';
import { FindOneBusinessCategoryInput } from '../common/gql-types/dto/business-category/find-one.input';
import { FindOneBusinessCategoryBySlugInput } from '../common/gql-types/dto/business-category/find-one-by-slug.input';
import {
    CreateBusinessCategoryResponse,
    FindAllBusinessCategoriesResponse,
    FindOneBusinessCategoryBySlugResponse,
    FindOneBusinessCategoryResponse,
} from '../common/gql-types/response-types/business-category.response-type';

@Resolver()
export class BusinessCategoryResolver {
    constructor(private readonly businessCategoryService: BusinessCategoryService) {}

    @Mutation(() => CreateBusinessCategoryResponse)
    async createBusinessCategory(@Args('dto') dto: CreateBusinessCategoryInput) {
        try {
            const result = await this.businessCategoryService.create(dto);
            return result;
        } catch (error) {
            throw error;
        }
    }

    @Query(() => FindAllBusinessCategoriesResponse)
    async findAllBusinessCategories(@Args('dto') dto: FindAllBusinessCategoriesInput) {
        try {
            const result = await this.businessCategoryService.findAll(dto);
            return result;
        } catch (error) {
            throw error;
        }
    }

    @Query(() => FindOneBusinessCategoryResponse)
    async findOneBusinessCategory(@Args('dto') dto: FindOneBusinessCategoryInput) {
        try {
            const result = await this.businessCategoryService.findOne(dto);
            return result;
        } catch (error) {
            throw error;
        }
    }

    @Query(() => FindOneBusinessCategoryBySlugResponse)
    async findOneBusinessCategoryBySlug(@Args('dto') dto: FindOneBusinessCategoryBySlugInput) {
        try {
            const result = await this.businessCategoryService.findOneBySlug(dto);
            return result;
        } catch (error) {
            throw error;
        }
    }
}
