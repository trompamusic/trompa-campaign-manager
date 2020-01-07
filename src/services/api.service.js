import { create } from 'apisauce';

const baseURL = process.env.REACT_APP_API_BASE_URL;

// define the api
const api = create({
  baseURL,
  headers: { 'Accept': 'application/json' },
});

// api methods
export const getPosts = () => api.get('/posts');
