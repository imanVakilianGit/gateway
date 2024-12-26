import { CanActivate, ExecutionContext, ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request, Response } from 'express';
import { lastValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

import { BUSINESS_SVC_CLIENT_PROXY_NAME, USER_SVC_CLIENT_PROXY_NAME } from '../constants/microservices-client-name.constant';
import { accessTokenCookieOptions, refreshTokenCookieOptions } from '../cookie/options.cookie';
import { parseUserAgent } from '../function/parse-user-agent.func';
import { Reflector } from '@nestjs/core';
import { EntityGuard } from '../decorator/entity-guard.decorator';

@Injectable()
export class UserAuthGuard implements CanActivate {
    constructor(
        @Inject(USER_SVC_CLIENT_PROXY_NAME) private readonly userSvcClient: ClientProxy,
        @Inject(BUSINESS_SVC_CLIENT_PROXY_NAME) private readonly businessSvcClient: ClientProxy,
        private readonly configService: ConfigService,
        private readonly reflector: Reflector,
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

            const entities = this.reflector.get(EntityGuard, ctx.getHandler());
            console.log('=========================');
            console.log(entities);
            if (entities.employee) {
                console.log('============ employee =============');
                const employee = await lastValueFrom(
                    this.businessSvcClient.send('find_one_employee_by_user_id', {
                        userId: req.user!.id,
                        ...(entities.employee.isActive ? { isActive: entities.employee.isActive } : {}),
                    }),
                );
                if (!employee?.data) throw new ForbiddenException(employee);

                req.employee = employee.data;
            }

            if (entities.manager) {
                console.log('============ manager =============');
                const manager = await lastValueFrom(
                    this.businessSvcClient.send('find_one_manager_by_employee_id', {
                        employeeId: req.employee!.id,
                        ...(entities.manager.isActive ? { isActive: entities.manager.isActive } : {}),
                    }),
                );
                if (!manager?.data) throw new ForbiddenException(manager);

                req.manager = manager.data;
            }

            return true;
        } catch (error) {
            throw error;
        }
    }
}
