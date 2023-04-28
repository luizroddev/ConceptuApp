interface IAPIClient {
  get<T = any>(url: string, params?: object): Promise<T>;
}

export default IAPIClient;
