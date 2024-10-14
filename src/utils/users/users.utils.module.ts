import { Module } from '@nestjs/common';
import { UsersUtilsService } from './users.utils.service';

@Module({
  providers: [UsersUtilsService],
  exports: [UsersUtilsService],
})
export class UsersUtilsModule {}
