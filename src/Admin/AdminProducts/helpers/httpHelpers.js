import axios from "axios";
import { makeAdminApi } from "../../../services/adminApi";

export const createProduct = async (productData, accessToken, base64Image) => {
  const response = await makeAdminApi(accessToken).post(
    "/products",
    productData
  );
  // Retrieves aws pressigned url
  const awsPressignedUrl = response.data.pressignedUrl;
  // Inserts the image into aws storage
  await axios.put(awsPressignedUrl, base64Image);
  return response.data;
};
