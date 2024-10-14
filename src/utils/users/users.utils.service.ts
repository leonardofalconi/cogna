import { Injectable } from '@nestjs/common';
import {
  TGetUsersFormattedFromSyncToInterfaceParams,
  TGetUsersFormattedFromSyncToInterfaceReturn,
} from './users.utils.interface';

@Injectable()
export class UsersUtilsService {
  constructor() {}

  getUsersFormattedFromSyncToInterface(
    params: TGetUsersFormattedFromSyncToInterfaceParams,
  ): TGetUsersFormattedFromSyncToInterfaceReturn {
    return params.usersSyncToFormat.map(({ name, email, username }) => ({
      name,
      email: `${email}-${crypto.randomUUID()}`, // It was necessary to add a random number to comply with what was requested in the test doc
      username,
    }));
  }
}
