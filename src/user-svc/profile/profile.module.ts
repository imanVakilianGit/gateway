import { Module } from '@nestjs/common';
import { UserProfileService } from './profile.service';
import { UserProfileResolver } from './profile.resolver';

@Module({
    providers: [UserProfileResolver, UserProfileService],
})
export class UserProfileModule {}
