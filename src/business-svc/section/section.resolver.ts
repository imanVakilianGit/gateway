import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Request } from 'express';
import { UseGuards } from '@nestjs/common';

import { ActivationToggleSectionInput } from '../common/gql-types/dto/section/activation-toggle.dto';
import { CreateSectionInput } from '../common/gql-types/dto/section/create.dto';
import { EntityGuard } from '../../common/decorator/entity-guard.decorator';
import { FindAllSectionsByManagerInput } from '../common/gql-types/dto/section/find-all-by-manager.dto';
import { FindOneSectionInput } from '../common/gql-types/dto/section/find-one.dto';
import { FindOneSectionByCodeInput } from '../common/gql-types/dto/section/find-one-by-code.dto';
import { SectionService } from './section.service';
import { UpdateSectionInput } from '../common/gql-types/dto/section/update.dto';
import { UserAuthGuard } from '../../common/guard/user-auth.guard';
import {
    ActivationToggleSectionResponse,
    CreateSectionResponse,
    FindAllSectionsByManagerResponse,
    FindOneSectionByCodeResponse,
    FindOneSectionResponse,
    UpdateSectionResponse,
} from '../common/gql-types/response-types/section.response-type';

@UseGuards(UserAuthGuard)
@Resolver()
export class SectionResolver {
    constructor(private readonly sectionService: SectionService) {}

    @EntityGuard({ employee: { shouldExist: true, isActive: true }, manager: { shouldExist: true, isActive: true } })
    @Mutation(() => CreateSectionResponse)
    async createSection(@Args('dto') dto: CreateSectionInput, @Context() { req }: { req: Request }) {
        try {
            const result = await this.sectionService.create({ ...dto, managerId: req.manager?.id, businessId: req.employee?.business_id });
            console.log(result);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    @EntityGuard({ employee: { shouldExist: true, isActive: true }, manager: { shouldExist: true, isActive: true } })
    @Query(() => FindAllSectionsByManagerResponse)
    async findAllSectionsByManager(@Args('dto') dto: FindAllSectionsByManagerInput, @Context() { req }: { req: Request }) {
        try {
            const result = await this.sectionService.findAll({ ...dto, managerId: req.manager?.id });
            return result;
        } catch (error) {
            throw error;
        }
    }

    @Query(() => FindOneSectionResponse)
    async findOneSection(@Args('dto') dto: FindOneSectionInput) {
        try {
            const result = await this.sectionService.findOne(dto);
            return result;
        } catch (error) {
            throw error;
        }
    }

    @Query(() => FindOneSectionByCodeResponse)
    async findOneSectionByCode(@Args('dto') dto: FindOneSectionByCodeInput) {
        try {
            const result = await this.sectionService.findOneByCode(dto);
            return result;
        } catch (error) {
            throw error;
        }
    }

    @EntityGuard({ employee: { shouldExist: true, isActive: true }, manager: { shouldExist: true, isActive: true } })
    @Mutation(() => UpdateSectionResponse)
    async updateSection(@Args('dto') dto: UpdateSectionInput, @Context() { req }: { req: Request }) {
        try {
            const result = await this.sectionService.update({ ...dto, managerId: req.manager?.id });
            return result;
        } catch (error) {
            throw error;
        }
    }

    @EntityGuard({ employee: { shouldExist: true, isActive: true }, manager: { shouldExist: true, isActive: true } })
    @Mutation(() => ActivationToggleSectionResponse)
    async activationToggleSection(@Args('dto') dto: ActivationToggleSectionInput, @Context() { req }: { req: Request }) {
        try {
            const result = await this.sectionService.activationToggle({
                ...dto,
                managerId: req.manager?.id,
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
}
