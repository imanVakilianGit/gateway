import { Module } from '@nestjs/common';

import { dynamicModules } from './config/dynamic.module';
import { MicroservicesModule } from './config/microservices.module';
import { staticModules } from './config/static.module';

@Module({
    imports: [...dynamicModules, ...staticModules, MicroservicesModule],
})
export class AppModule {}
