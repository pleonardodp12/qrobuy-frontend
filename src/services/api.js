import axios from 'axios';

const api = axios.create({
  type: "no-cors",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  baseURL: "http://qrobuy-backend.herokuapp.com/api/v1",
})

export default api;