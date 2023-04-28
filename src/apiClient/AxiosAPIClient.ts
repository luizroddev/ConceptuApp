import axios, {AxiosInstance} from 'axios';
import IAPIClient from './IAPIClient';

class AxiosAPIClient implements IAPIClient {
  private apiClient: AxiosInstance;

  constructor(baseURL: string) {
    this.apiClient = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async get<T = any>(url: string, params?: object): Promise<T> {
    const response = await this.apiClient.get<T>(url, params);
    return response.data;
  }
}

export default AxiosAPIClient;
