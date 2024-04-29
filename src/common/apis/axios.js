import { getURL } from '../util';
import instance from '../../lib/axios';

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

  const response = await instance.request({ url, ...options });

  let resData;

  if ((response.headers?.get('content-type') ?? '')?.includes('application/json')) {
    resData = await response.data;
  }

  return resData;
}
