import { Module } from '@nestjs/common';
import { UserProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [UserProfileModule, AuthModule],
})
export class UserSvcModule {}
