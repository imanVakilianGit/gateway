import { Module } from '@nestjs/common';

import { BusinessCategoryModule } from './business-category/business-category.module';
import { BusinessModule } from './business/business.module';
import { EmployeeModule } from './employee/employee.module';
import { BranchModule } from './branch/branch.module';

@Module({
    imports: [BusinessCategoryModule, BusinessModule, EmployeeModule, BranchModule],
})
export class BusinessSvcModule {}
