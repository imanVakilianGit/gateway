import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { BUSINESS_SVC_CLIENT_PROXY_NAME } from '../../common/constants/microservices-client-name.constant';
import { CreateBranchInput } from '../common/gql-types/dto/branch/create.dto';

@Injectable()
export class BranchService {
    constructor(@Inject(BUSINESS_SVC_CLIENT_PROXY_NAME) private readonly businessSvcClient: ClientProxy) {}

    create(dto: CreateBranchInput & { managerId?: number; businessId?: number }) {
        return lastValueFrom(this.businessSvcClient.send('create_branch', dto));
    }
}
