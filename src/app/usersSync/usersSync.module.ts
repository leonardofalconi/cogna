import { Module } from '@nestjs/common';
import { UsersSyncController } from './usersSync.controller';
import { UsersSyncProviderModule } from 'src/providers/usersSync/usersSyncProvider.module';
import { UsersModule } from 'src/app/users/users.module';

@Module({
  imports: [UsersSyncProviderModule, UsersModule],
  controllers: [UsersSyncController],
})
export class UsersSyncModule {}
