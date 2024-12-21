import { Module } from '@nestjs/common';
import { BusinessCategoryService } from './business-category.service';
import { BusinessCategoryResolver } from './business-category.resolver';

@Module({
    providers: [BusinessCategoryResolver, BusinessCategoryService],
})
export class BusinessCategoryModule {}
