import axios, { type AxiosResponse, AxiosError } from 'axios';
import { ref } from 'vue';

const API_URL = 'http://localhost:3000';

export function useHttp() { 
  const error = ref<string | null>(null);

  const api = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const handleError = (err: AxiosError) => {
    error.value = err.message;
    return Promise.reject(err);
  };

  const get = async <T>(endpoint: string): Promise<T> => {
    try { 
      error.value = null;
      const response: AxiosResponse<T> = await api.get(endpoint);
      return response.data;
    } catch (err) {
      return handleError(err as AxiosError);
    }  
  };

  const post = async <T>(endpoint: string, data: any): Promise<T> => {
    try {
      error.value = null;
      const response: AxiosResponse<T> = await api.post(endpoint, data);
      return response.data;
    } catch (err) {
      return handleError(err as AxiosError);
    }  
  };

  const put = async <T>(endpoint: string, data: any): Promise<T> => {
    try { 
      error.value = null;
      const response: AxiosResponse<T> = await api.put(endpoint, data);
      return response.data;
    } catch (err) {
      return handleError(err as AxiosError);
    }  
  };

  

  return {
    error,
    get,
    post,
    put, 
  };
}