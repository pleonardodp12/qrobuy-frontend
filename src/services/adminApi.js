import axios from "axios";

/**
 * Factory for the admin API. Must be used in the following endpoints
 * [POST] /products
 * [PATCH] /products/{id}
 * [DELETE] /products/{id}
 * 
 * [GET] /orders
 * [GET] /orders/{id}
 * [PATCH] /orders/{id}
 * @param {String} accessToken User access token that is retrieved during signin or siginup. Found in the account state
 */
export const makeAdminApi = (accessToken) => {
  return axios.create({
    type: "no-cors",
    headers: {
      Accept: "application/json",
      "x-access-token": accessToken,
      "Content-Type": "application/json",
    },
    baseURL: "https://qrobuy-backend.herokuapp.com/api/v1",
  });
};
