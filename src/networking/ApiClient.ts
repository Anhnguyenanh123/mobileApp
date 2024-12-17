import axios, {AxiosInstance} from 'axios';

export class ApiClient {
  axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com/',
      timeout: 5000,
    });
  }
}
