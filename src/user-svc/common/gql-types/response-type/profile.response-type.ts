import { ObjectType, Field } from '@nestjs/graphql';

import { BaseResponse } from '../../../../common/gql-types/response-type/base-response.response-type';
import { UserProfileEntity, UserProfilesEntity } from '../entity/profile.entity';

@ObjectType({ implements: BaseResponse })
export class CreateUserProfileResponse extends BaseResponse {
    @Field(() => UserProfileEntity, { nullable: true })
    data?: UserProfileEntity;
}

@ObjectType({ implements: BaseResponse })
export class FindAllUserProfilesResponse extends BaseResponse {
    @Field(() => UserProfilesEntity, { nullable: true })
    data?: UserProfilesEntity;
}

@ObjectType({ implements: BaseResponse })
export class FindOneUserProfileResponse extends BaseResponse {
    @Field(() => UserProfileEntity, { nullable: true })
    data?: UserProfileEntity;
}

@ObjectType({ implements: BaseResponse })
export class UpdateUserProfileResponse extends BaseResponse {
    @Field(() => UserProfileEntity, { nullable: true })
    data?: UserProfileEntity;
}
