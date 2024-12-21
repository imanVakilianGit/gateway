import { Module } from '@nestjs/common';

import { BusinessCategoryModule } from './business-category/business-category.module';

@Module({
    imports: [BusinessCategoryModule],
})
export class BusinessSvcModule {}
