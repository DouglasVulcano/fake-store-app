const mode = 'development';
const urls = {
  mode,
  development: {
    baseURL: 'https://fakestoreapi.com',
  },
  production: {
    baseUrl: 'https://fakestoreapi.com',
  },
};

export default {
  ...urls[mode],
  urls,
};
