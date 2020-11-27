import axios from "axios";
import api from "../../../services/api";

export const createProduct = async (productData, accessToken, base64Image) => {
  const response = await api.post("/products", productData, {
    headers: {
      "x-access-token": accessToken,
      "Content-Type": "application/json",
    },
  });
  const awsPressignedUrl = response.data.pressignedUrl;
  await axios.put(awsPressignedUrl, base64Image);
};
