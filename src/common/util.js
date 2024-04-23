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

const setHex = (code) => {
  return Math.floor((code > 99 ? code - 50 : code) * 1.27 + 128).toString(16);
};

export const hexColorEncode = (text) => {
  let color_r = setHex(text.charCodeAt(0));
  let color_g = setHex(text.charCodeAt(1));
  let color_b = setHex(text.charCodeAt(2));

  return `#${color_r + color_g + color_b}`;
};
