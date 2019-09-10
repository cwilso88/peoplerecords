import axios from 'axios';

export const getRecords = axios.create({
    baseURL: 'https://api.salesloft.com',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });