import { Module } from '@nestjs/common';
import { UsersSyncProviderService } from './usersSyncProvider.service';
import { HttpModule } from 'src/clients/http/http.module';

@Module({
  imports: [HttpModule],
  providers: [UsersSyncProviderService],
  exports: [UsersSyncProviderService],
})
export class UsersSyncProviderModule {}
