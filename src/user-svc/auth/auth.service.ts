import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';

import { parseUserAgent } from '../../common/function/parse-user-agent.func';
import { USER_SVC_CLIENT_PROXY_NAME } from '../../common/constants/microservices-client-name.constant';
import { UserLoginByMobileInput } from '../common/gql-types/dto/auth/login-by-mobile.input';
import { UserConfirmLoginInput } from '../common/gql-types/dto/auth/confirm-login.input';
import { UserLoginByEmailInput } from '../common/gql-types/dto/auth/login-by-email.input';
import { UserLoginTypeEnum } from '../common/enum/login-type.enum';
import { accessTokenCookieOptions, refreshTokenCookieOptions } from '../../common/cookie/options.cookie';

@Injectable()
export class AuthService {
    constructor(
        @Inject(USER_SVC_CLIENT_PROXY_NAME) private readonly userSvcClient: ClientProxy,
        private readonly configService: ConfigService,
    ) {}

    login(dto: (UserLoginByMobileInput | UserLoginByEmailInput) & { type: UserLoginTypeEnum }) {
        if (dto.type === UserLoginTypeEnum.MOBILE_NUMBER) return lastValueFrom(this.userSvcClient.send('user_login_by_mobile', dto));
        else return lastValueFrom(this.userSvcClient.send('user_login_by_email', dto));
    }

    async confirmLogin(dto: UserConfirmLoginInput, { req, res }: { req: Request; res: Response }) {
        Object.assign(dto, parseUserAgent(req.headers['user-agent'] || '', req.ip || ''));
        const result = await lastValueFrom(this.userSvcClient.send('confirm_login_user', dto));

        if (result.data) {
            const { accessToken, refreshToken } = result.data;
            res.cookie('accessToken', accessToken, accessTokenCookieOptions(this.configService));
            res.cookie('refreshToken', refreshToken, refreshTokenCookieOptions(this.configService));
        }

        return result;
    }

    async logout(dto: { id: number }, res: Response) {
        const result = await lastValueFrom(this.userSvcClient.send('logout_user', dto));

        if (result.data) {
            res.clearCookie('accessToken');
            res.clearCookie('refreshToken');
        }

        return result;
    }
}
