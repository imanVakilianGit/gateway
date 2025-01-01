import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

import { ActivationToggleSectionInput } from '../common/gql-types/dto/section/activation-toggle.dto';
import { BUSINESS_SVC_CLIENT_PROXY_NAME } from '../../common/constants/microservices-client-name.constant';
import { CreateSectionInput } from '../common/gql-types/dto/section/create.dto';
import { FindOneSectionByCodeInput } from '../common/gql-types/dto/section/find-one-by-code.dto';
import { FindOneSectionInput } from '../common/gql-types/dto/section/find-one.dto';
import { FindAllSectionsByManagerInput } from '../common/gql-types/dto/section/find-all-by-manager.dto';
import { UpdateSectionInput } from '../common/gql-types/dto/section/update.dto';

@Injectable()
export class SectionService {
    constructor(@Inject(BUSINESS_SVC_CLIENT_PROXY_NAME) private readonly businessSvcClient: ClientProxy) {}

    create(dto: CreateSectionInput & { managerId?: number; businessId?: number }) {
        return lastValueFrom(this.businessSvcClient.send('create_section', dto));
    }

    findAll(dto: FindAllSectionsByManagerInput & { managerId?: number }) {
        return lastValueFrom(this.businessSvcClient.send('find_all_sections', dto));
    }

    findOne(dto: FindOneSectionInput) {
        return lastValueFrom(this.businessSvcClient.send('find_one_section', dto));
    }

    findOneByCode(dto: FindOneSectionByCodeInput) {
        return lastValueFrom(this.businessSvcClient.send('find_one_section_by_code', dto));
    }

    update(dto: UpdateSectionInput & { managerId?: number }) {
        return lastValueFrom(this.businessSvcClient.send('update_section', dto));
    }

    activationToggle(dto: ActivationToggleSectionInput & { managerId?: number }) {
        return lastValueFrom(this.businessSvcClient.send('activation_toggle_section', dto));
    }
}
