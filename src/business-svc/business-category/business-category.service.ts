import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { BUSINESS_SVC_CLIENT_PROXY_NAME } from '../../common/constants/microservices-client-name.constant';
import { CreateBusinessCategoryInput } from '../common/gql-types/dto/business-category/create.input';
import { FindAllBusinessCategoriesInput } from '../common/gql-types/dto/business-category/find-all.input';
import { FindOneBusinessCategoryInput } from '../common/gql-types/dto/business-category/find-one.input';
import { FindOneBusinessCategoryBySlugInput } from '../common/gql-types/dto/business-category/find-one-by-slug.input';

@Injectable()
export class BusinessCategoryService {
    constructor(@Inject(BUSINESS_SVC_CLIENT_PROXY_NAME) private readonly businessSvcClient: ClientProxy) {}

    create(dto: CreateBusinessCategoryInput) {
        return lastValueFrom(this.businessSvcClient.send('create_business_category', dto));
    }

    findAll(dto: FindAllBusinessCategoriesInput) {
        return lastValueFrom(this.businessSvcClient.send('find_all_business_category', dto));
    }

    findOne(dto: FindOneBusinessCategoryInput) {
        return lastValueFrom(this.businessSvcClient.send('find_one_by_id_business_category', dto));
    }

    findOneBySlug(dto: FindOneBusinessCategoryBySlugInput) {
        return lastValueFrom(this.businessSvcClient.send('find_one_by_slug_business_category', dto));
    }
}
