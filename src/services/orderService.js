import axios from "axios";

const API = "/api/orders";

export const trackOrder = async (orderId, contact) => {
  const { data } = await axios.post(`${API}/track`, { orderId, contact });
  return data;
};
