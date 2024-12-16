import { Module } from '@nestjs/common';
import { UserProfileModule } from './profile/profile.module';

@Module({
    imports: [UserProfileModule],
})
export class UserSvcModule {}
