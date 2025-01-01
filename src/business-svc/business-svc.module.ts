import { Module } from '@nestjs/common';

import { BusinessCategoryModule } from './business-category/business-category.module';
import { BusinessModule } from './business/business.module';
import { BranchModule } from './branch/branch.module';
import { EmployeeModule } from './employee/employee.module';
import { SectionModule } from './section/section.module';

@Module({
    imports: [BusinessCategoryModule, BusinessModule, EmployeeModule, BranchModule, SectionModule],
})
export class BusinessSvcModule {}
