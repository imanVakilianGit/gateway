import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { CreateProfileInput } from '../common/gql-types/dto/profile/create.input';
import { UpdateUserProfileInput } from '../common/gql-types/dto/profile/update.input';
import { USER_SVC_CLIENT_PROXY_NAME } from '../../common/constants/microservices-client-name.constant';
import { FindAllUserProfilesInput } from '../common/gql-types/dto/profile/find-all.input';
import { FindOneUserProfileInput } from '../common/gql-types/dto/profile/find-one.input';

@Injectable()
export class UserProfileService {
    constructor(@Inject(USER_SVC_CLIENT_PROXY_NAME) private readonly userSvcClient: ClientProxy) {}

    create(dto: CreateProfileInput) {
        return lastValueFrom(this.userSvcClient.send('create_user_profile', dto));
    }

    findAll(dto: FindAllUserProfilesInput) {
        return lastValueFrom(this.userSvcClient.send('find_all_user_profiles', dto));
    }

    findOne(dto: FindOneUserProfileInput) {
        return lastValueFrom(this.userSvcClient.send('find_one_user_profile_by_id', dto));
    }

    update(dto: UpdateUserProfileInput) {
        return lastValueFrom(this.userSvcClient.send('update_user_profile', dto));
    }
}
