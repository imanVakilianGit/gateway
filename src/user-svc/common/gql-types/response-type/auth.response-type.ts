import { ObjectType } from '@nestjs/graphql';

import { BaseResponse } from '../../../../common/gql-types/response-type/base-response.response-type';

@ObjectType({ implements: BaseResponse })
export class UserLoginResponse extends BaseResponse {}

@ObjectType({ implements: BaseResponse })
export class UserConfirmLoginResponse extends BaseResponse {}

@ObjectType({ implements: BaseResponse })
export class UserLogoutResponse extends BaseResponse {}
