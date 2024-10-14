import { Injectable } from '@nestjs/common';
import { HttpService } from 'src/clients/http/http.service';
import { IUserSync } from 'src/interfaces/userSync.interface';

@Injectable()
export class UsersSyncProviderService {
  private syncUri = '/users';

  constructor(private readonly httpService: HttpService) {}

  async sync() {
    const response = await this.httpService
      .getInstance()
      .get<IUserSync[]>(this.syncUri);

    return response.data;
  }
}
