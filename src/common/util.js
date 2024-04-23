const toQuery = (paramData) => {
  const params = new URLSearchParams(paramData);

  return params.toString();
};

export const getURL = (pathname, paramData) => {
  let url = '';
  const query = toQuery(paramData);

  if (pathname) url += pathname;

  if (query) {
    url += '?';
    url += query;
  }

  return url;
};
