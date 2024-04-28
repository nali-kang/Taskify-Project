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
  return Math.floor((code > 99 ? Number((code + '').slice(-2)) : code) * 1.27 + 128).toString(16);
};

export const hexColorEncode = (text) => {
  if (text?.length > 0) {
    const color_r = setHex(text.charCodeAt(0));
    const color_g = setHex(text.length > 1 ? text.charCodeAt(1) : text.charCodeAt(0));
    const color_b = setHex(text.length > 2 ? text.charCodeAt(2) : text.charCodeAt(0));

    return `#${(color_r + color_g + color_b).slice(0, 6)}`;
  } else {
    return '#ffffff';
  }
};
