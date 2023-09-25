/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosRequestConfig } from 'axios';
import { TIMEOUT } from 'src/constants/common.constants';
import { getCookieStorage, setOneCookieStorage } from 'src/helpers/storage';
import { noti } from 'src/hooks/useNoti';
import { errorMessage } from 'src/messages/errorMessages';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_API}/${process.env.REACT_APP_API_VERSION}`,
  timeout: TIMEOUT,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const accessToken = getCookieStorage('access_token');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  async (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  async (error) => {
    try {
      if (!error.response) {
        // noti.error(errorMessage.AUTHEN);
        return Promise.reject(error);
      }

      switch (error.response?.status) {
        case 401:
          noti.error(errorMessage.AUTHEN);
          break;

        case 500:
          noti.error(errorMessage.SERVER_INTERNAL_ERROR);
          break;

        case 400:
          return error.response;

        case 302:
          return error.response;

        default:
          break;
      }

      return Promise.reject(error);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);

export default axiosInstance;
