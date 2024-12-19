import { ForbiddenError } from '@nestjs/apollo';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class GuestGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        try {
            const ctx = GqlExecutionContext.create(context);
            const req: Request = ctx.getContext().req;

            console.log('=========================================================');
            console.log(req.signedCookies['accessToken']);
            console.log('=========================================================');
            console.log(req.signedCookies['refreshToken']);

            if (req.signedCookies['accessToken'] || req.signedCookies['refreshToken']) {
                throw new ForbiddenError('you are logged in already');
            }

            return true;
        } catch (error) {
            throw error;
        }
    }
}
