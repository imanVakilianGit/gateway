import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const port = Number(process.env.APP_PORT) || 0;

    const app = await NestFactory.create(AppModule);
    await app.listen(port);
}
bootstrap();
