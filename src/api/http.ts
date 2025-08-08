import axios, { type AxiosResponse, type AxiosInstance } from "axios";
import { useLang } from "./hooks/useLang";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "http://localhost:3000",
      timeout: 10000,
    });
    this.setupInterceptors();
  }

  private setupInterceptors() {
    useLang(this.axiosInstance);
  }

  public async request<T>(
    method: HttpMethod,
    url: string,
    data?: any
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.request<T>({
      method,
      url,
      data,
    });
  }

  public async get<T>(url: string, params?: any): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url, { params });
  }

  public async post<T>(url: string, data?: any): Promise<AxiosResponse<T>> {
    return this.request<T>("POST", url, data);
  }

  public async put<T>(url: string, data?: any): Promise<AxiosResponse<T>> {
    return this.request<T>("PUT", url, data);
  }

  public async delete<T>(url: string): Promise<AxiosResponse<T>> {
    return this.request<T>("DELETE", url);
  }
}

export const httpClient = new HttpClient();
