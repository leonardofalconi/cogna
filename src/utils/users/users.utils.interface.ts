import { IUser } from 'src/interfaces/user.interface';
import { IUserSync } from 'src/interfaces/userSync.interface';

export type TGetUsersFormattedFromSyncToInterfaceParams = {
  usersSyncToFormat: IUserSync[];
};

export type TGetUsersFormattedFromSyncToInterfaceReturn = Omit<IUser, 'id'>[];
