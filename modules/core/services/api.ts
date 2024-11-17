import axios from 'axios';

const api = axios.create();

export const setupApi = (apiUrl: string) => {
  api.defaults.baseURL = apiUrl;
};

export default api;
