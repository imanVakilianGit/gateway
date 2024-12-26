import * as express from 'express';
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: number;
                first_name: string;
                last_name: string;
                [key: string]: any;
            };

            employee?: {
                id: number;
                employee_code: string;
                business_id: number;
                [key: string]: any;
            };

            manager?: {
                id: number;
                [key: string]: any;
            };
        }
    }
}
