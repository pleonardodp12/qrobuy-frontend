import axios from "axios";

export const makeAdminApi = (accessToken) => {
  return axios.create({
    type: "no-cors",
    headers: {
      Accept: "application/json",
      "x-access-token": accessToken,
      "Content-Type": "application/json",
    },
    baseURL: "http://localhost:3333/api/v1",
  });
};
