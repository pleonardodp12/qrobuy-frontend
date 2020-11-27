import axios from 'axios';

const api = axios.create({
  type: "no-cors",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  baseURL: "http://localhost:3333/api/v1",
});

export default api;