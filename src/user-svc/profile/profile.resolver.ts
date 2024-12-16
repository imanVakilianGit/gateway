import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { CreateProfileInput } from '../common/gql-types/dto/profile/create.input';
import { FindAllUserProfilesInput } from '../common/gql-types/dto/profile/find-all.input';
import { FindOneUserProfileInput } from '../common/gql-types/dto/profile/find-one.input';
import { UserProfileService } from './profile.service';
import { UpdateUserProfileInput } from '../common/gql-types/dto/profile/update.input';
import {
    CreateUserProfileResponse,
    FindAllUserProfilesResponse,
    FindOneUserProfileResponse,
    UpdateUserProfileResponse,
} from '../common/gql-types/response-type/profile.response-type';

@Resolver()
export class UserProfileResolver {
    constructor(private readonly profileService: UserProfileService) {}

    @Mutation(() => CreateUserProfileResponse)
    async createUserProfile(@Args('dto') dto: CreateProfileInput) {
        try {
            const result = await this.profileService.create(dto);
            return result;
        } catch (error) {
            return error;
        }
    }

    @Query(() => FindAllUserProfilesResponse)
    async findAllUserProfiles(@Args('dto') dto: FindAllUserProfilesInput) {
        try {
            const result = await this.profileService.findAll(dto);
            return result;
        } catch (error) {
            return error;
        }
    }

    @Query(() => FindOneUserProfileResponse)
    async findOneUserProfile(@Args('dto') dto: FindOneUserProfileInput) {
        try {
            const result = await this.profileService.findOne(dto);
            return result;
        } catch (error) {
            return error;
        }
    }

    @Mutation(() => UpdateUserProfileResponse)
    async updateUserProfile(@Args('dto') dto: UpdateUserProfileInput) {
        try {
            const result = await this.profileService.update(dto);
            return result;
        } catch (error) {
            return error;
        }
    }
}
