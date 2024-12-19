import { CanActivate, ExecutionContext, ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request, Response } from 'express';
import { lastValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

import { USER_SVC_CLIENT_PROXY_NAME } from '../../../common/constants/microservices-client-name.constant';
import { accessTokenCookieOptions, refreshTokenCookieOptions } from '../../../common/cookie/options.cookie';
import { parseUserAgent } from '../../../common/function/parse-user-agent.func';

@Injectable()
export class UserAuthGuard implements CanActivate {
    constructor(
        @Inject(USER_SVC_CLIENT_PROXY_NAME) private readonly userSvcClient: ClientProxy,
        private readonly configService: ConfigService,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const ctx = GqlExecutionContext.create(context);
            const req: Request = ctx.getContext().req;
            const res: Response = ctx.getContext().res;

            const accessToken = req.signedCookies['accessToken'];
            const refreshToken = req.signedCookies['refreshToken'];

            if (!accessToken || !refreshToken) {
                throw new ForbiddenException('need to login');
            }

            res.clearCookie('accessToken');
            res.clearCookie('refreshToken');

            const validateAndGetNewTokens = await lastValueFrom(
                this.userSvcClient.send('authenticate_user', {
                    accessToken,
                    refreshToken,
                    ...parseUserAgent(req.headers['user-agent'] || '', req.ip || ''),
                }),
            );
            if (!validateAndGetNewTokens?.data) throw new ForbiddenException(validateAndGetNewTokens);

            res.cookie('accessToken', validateAndGetNewTokens.data.accessToken, accessTokenCookieOptions(this.configService));
            res.cookie('refreshToken', validateAndGetNewTokens.data.refreshToken, refreshTokenCookieOptions(this.configService));

            delete validateAndGetNewTokens.data.accessToken;
            delete validateAndGetNewTokens.data.refreshToken;

            req.user = validateAndGetNewTokens.data;

            return true;
        } catch (error) {
            throw error;
        }
    }
}
