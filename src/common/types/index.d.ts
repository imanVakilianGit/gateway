import * as express from 'express';
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: number;
                firstName: string;
                lastName: string;
                [key: string]: any;
            };
        }
    }
}
