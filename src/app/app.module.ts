import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersSyncModule } from './usersSync/usersSync.module';

@Module({
  imports: [UsersModule, UsersSyncModule],
  providers: [],
})
export class AppModule {}
