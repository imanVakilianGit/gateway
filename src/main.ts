import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';

async function bootstrap() {
    const port = Number(process.env.APP_PORT) || 0;

    const app = await NestFactory.create(AppModule);

    app.use(cookieParser(process.env.COOKIE_SECRET));

    await app.listen(port);
    console.log('👽 ~ gateway:', `server running on port: ${port}`);
}
bootstrap();
