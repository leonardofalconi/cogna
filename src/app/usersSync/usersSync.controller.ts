import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from 'src/app/users/users.service';
import { UsersSyncProviderService } from 'src/providers/usersSync/usersSyncProvider.service';

@Controller('/sync-users')
export class UsersSyncController {
  constructor(
    private readonly usersService: UsersService,
    private readonly usersSyncProviderService: UsersSyncProviderService,
  ) {}

  @Get()
  async syncUsersFromExternalApi() {
    try {
      const usersSync = await this.usersSyncProviderService.sync();

      const usersFormatted = usersSync.map(({ name, email, username }) => ({
        name,
        email: `${email}-${crypto.randomUUID()}`,
        username,
      }));

      const usersCreatedCount =
        await this.usersService.createMany(usersFormatted);

      return { data: `The number of users synced: ${usersCreatedCount}` };
    } catch (e) {
      const error = e as Error;

      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
