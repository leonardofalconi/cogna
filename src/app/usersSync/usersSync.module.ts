import { Module } from '@nestjs/common';
import { UsersSyncController } from './usersSync.controller';
import { UsersSyncProviderModule } from 'src/providers/usersSync/usersSyncProvider.module';
import { UsersModule } from 'src/app/users/users.module';
import { UsersUtilsModule } from 'src/utils/users/users.utils.module';

@Module({
  imports: [UsersSyncProviderModule, UsersModule, UsersUtilsModule],
  controllers: [UsersSyncController],
})
export class UsersSyncModule {}
