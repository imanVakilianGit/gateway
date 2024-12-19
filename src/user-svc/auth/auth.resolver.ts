import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { Request, Response } from 'express';
import { UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { GuestGuard } from '../../common/guard/guest.guard';
import { UserLoginByMobileInput } from '../common/gql-types/dto/auth/login-by-mobile.input';
import { UserConfirmLoginInput } from '../common/gql-types/dto/auth/confirm-login.input';
import { UserAuthGuard } from '../common/guard/auth.guard';
import { UserLoginTypeEnum } from '../common/enum/login-type.enum';
import { UserLoginByEmailInput } from '../common/gql-types/dto/auth/login-by-email.input';
import { UserConfirmLoginResponse, UserLoginResponse, UserLogoutResponse } from '../common/gql-types/response-type/auth.response-type';

@Resolver()
export class AuthResolver {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(GuestGuard)
    @Mutation(() => UserLoginResponse)
    async userLoginByMobile(@Args('dto') dto: UserLoginByMobileInput) {
        try {
            const result = await this.authService.login({ ...dto, type: UserLoginTypeEnum.MOBILE_NUMBER });
            return result;
        } catch (error) {
            return error;
        }
    }

    @UseGuards(GuestGuard)
    @Mutation(() => UserLoginResponse)
    async userLoginByEmail(@Args('dto') dto: UserLoginByEmailInput) {
        try {
            const result = await this.authService.login({ ...dto, type: UserLoginTypeEnum.EMAIL });
            return result;
        } catch (error) {
            return error;
        }
    }

    @UseGuards(GuestGuard)
    @Mutation(() => UserConfirmLoginResponse)
    async userConfirmLogin(@Args('dto') dto: UserConfirmLoginInput, @Context() { req, res }: { req: Request; res: Response }) {
        try {
            const result = await this.authService.confirmLogin(dto, { req, res });
            return result;
        } catch (error) {
            return error;
        }
    }

    @UseGuards(UserAuthGuard)
    @Mutation(() => UserLogoutResponse)
    async userLogout(@Context() { req, res }: { req: Request; res: Response }) {
        try {
            const result = await this.authService.logout({ id: req.user!.id }, res);
            return result;
        } catch (error) {
            return error;
            console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
            throw error;
        }
    }
}
