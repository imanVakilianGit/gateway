import { Module } from '@nestjs/common';

import { BusinessCategoryModule } from './business-category/business-category.module';
import { BusinessModule } from './business/business.module';

@Module({
    imports: [BusinessCategoryModule, BusinessModule],
})
export class BusinessSvcModule {}
