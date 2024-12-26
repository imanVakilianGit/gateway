import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { BUSINESS_SVC_CLIENT_PROXY_NAME } from '../../common/constants/microservices-client-name.constant';
import { CreateEmployeeInput } from '../common/gql-types/dto/employee/create.input';
import { PromoteEmployeeToManagerInput } from '../common/gql-types/dto/employee/promote-to-manager.input';

@Injectable()
export class EmployeeService {
    constructor(@Inject(BUSINESS_SVC_CLIENT_PROXY_NAME) private readonly businessSvcClient: ClientProxy) {}

    create(dto: CreateEmployeeInput) {
        return lastValueFrom(this.businessSvcClient.send('create_employee', dto));
    }

    promoteToManager(dto: PromoteEmployeeToManagerInput) {
        return lastValueFrom(this.businessSvcClient.send('promote_employee_to_manager', dto));
    }
}
