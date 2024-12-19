import { ConfigService } from '@nestjs/config';
import { CookieOptions } from 'express';

import { ACCESS_TOKEN_EXPIRES_ENV, REFRESH_TOKEN_EXPIRES_ENV } from '../constants/environments-name.constant';

export function accessTokenCookieOptions(configService: ConfigService): CookieOptions {
    return {
        httpOnly: true,
        maxAge: configService.get<number>(ACCESS_TOKEN_EXPIRES_ENV),
        signed: true,
        sameSite: true,
        secure: false,
    };
}

export function refreshTokenCookieOptions(configService: ConfigService): CookieOptions {
    return {
        httpOnly: true,
        maxAge: configService.get<number>(REFRESH_TOKEN_EXPIRES_ENV),
        signed: true,
        sameSite: true,
        secure: false,
    };
}
