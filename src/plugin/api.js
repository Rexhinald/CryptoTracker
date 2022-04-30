import axios from 'axios';

const API = axios.create({
  baseURL: 'https://data.messari.io/api/v2/',
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 20000,
});

export default API;
