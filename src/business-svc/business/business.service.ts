import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { BUSINESS_SVC_CLIENT_PROXY_NAME } from '../../common/constants/microservices-client-name.constant';
import { CreateBusinessInput } from '../common/gql-types/dto/business/create.input';
import { FindAllBusinessesInput } from '../common/gql-types/dto/business/find-all.input';
import { FindOneBusinessInput } from '../common/gql-types/dto/business/find-one.input';
import { FindOneBusinessBySlugInput } from '../common/gql-types/dto/business/find-one-by-slug.input';
import { UpdateBusinessInput } from '../common/gql-types/dto/business/update.input';

@Injectable()
export class BusinessService {
    constructor(@Inject(BUSINESS_SVC_CLIENT_PROXY_NAME) private readonly businessSvcClient: ClientProxy) {}

    create(dto: CreateBusinessInput & { userId?: number }) {
        return lastValueFrom(this.businessSvcClient.send('create_business', dto));
    }

    findAll(dto: FindAllBusinessesInput) {
        return lastValueFrom(this.businessSvcClient.send('find_all_business', dto));
    }

    findOne(dto: FindOneBusinessInput) {
        return lastValueFrom(this.businessSvcClient.send('find_one_by_id_business', dto));
    }

    findOneBySlug(dto: FindOneBusinessBySlugInput) {
        return lastValueFrom(this.businessSvcClient.send('find_one_by_slug_business', dto));
    }

    update(dto: UpdateBusinessInput) {
        return lastValueFrom(this.businessSvcClient.send('update_business', dto));
    }
}
