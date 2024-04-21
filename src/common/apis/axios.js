import axios from 'axios';
import { BASE_URL } from '@constants/constants';
import { getURL } from '../util';

export const apiAxios = axios.create({
  baseURL: BASE_URL, // 기본 서버 주소 입력
  headers: {
    Accept: 'application/json; charset=UTF-8',
    Authorization: localStorage.getItem('accessToken')
      ? 'Bearer ' + localStorage.getItem('accessToken')
      : null,
  },
});

export async function requestHandler({ param, path, method }) {
  let url = '';
  const options = { method };

  if (method === 'GET') {
    url = getURL(path, param);
  } else {
    if (path.indexOf(':') > -1) {
      const dynamicPath = path.split('/').map((e) => {
        if (e.indexOf(':') > -1) {
          return param[e.split(':')[1]];
        } else {
          return e;
        }
      });
      url = dynamicPath.join('/');
    } else {
      url = path;
    }
    options.data = param;
  }

  const response = await apiAxios.request({ url, ...options });

  let resData;

  if ((response.headers?.get('content-type') ?? '')?.includes('application/json')) {
    resData = await response.data;
  }

  return resData;
}
