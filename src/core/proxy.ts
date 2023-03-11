import axios, { AxiosHeaders, AxiosPromise, AxiosRequestConfig } from "axios";

export enum CallType {
  Get,
  Post,
  Put,
  Delete,
}

function getBaseUrl(): string {
  return process.env.REACT_APP_API_URL ?? '';
};

function getRequestHeaders() {
  const headers: AxiosHeaders = Object.assign({});
  headers['Content-Type'] = 'application/json; charset=utf-8';

  return headers;
}

function getRequestConfig(): AxiosRequestConfig {
  const config: AxiosRequestConfig = {
    timeout: 120 * 1000,
    headers: getRequestHeaders(),
  };

  return config;
}

export function call<T>(method: CallType, apiUrl: string, request?: any): AxiosPromise<T> {
  const serviceUrl = `${getBaseUrl()}/${apiUrl}`;
  const requestConfig = getRequestConfig();

  switch (method) {
    case CallType.Get:
      return axios.get(serviceUrl, requestConfig);
    case CallType.Post:
      return axios.post(serviceUrl, request, requestConfig);
    case CallType.Put:
      return axios.put(serviceUrl, request, requestConfig);
    case CallType.Delete:
      return axios.delete(serviceUrl, requestConfig);
  }
}