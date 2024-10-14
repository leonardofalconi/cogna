import { Injectable } from '@nestjs/common';
import axios, { Axios } from 'axios';

@Injectable()
export class HttpService {
  private axiosInstance: Axios;
  private baseUrl = process.env.BASE_URL_JSONPLACEHOLDER_API;
  private timeoutInSeconds = 10;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      timeout: this.timeoutInSeconds * 1000,
      timeoutErrorMessage: 'Request timeout.',
    });
  }

  getInstance(): Axios {
    return this.axiosInstance;
  }
}
