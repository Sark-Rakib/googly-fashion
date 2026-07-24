import axios from "axios";

const API = "/api/orders";

export const trackOrder = async (orderId, contact) => {
  const { data } = await axios.post(`${API}/track`, { orderId, contact });
  return data;
};

export const getOrderById = async (orderId) => {
  const { data } = await axios.get(`${API}/${orderId}`);
  return data;
};

export const createOrder = async (orderData) => {
  const { data } = await axios.post(API, orderData);
  return data;
};

export const getOrdersByUser = async (token) => {
  const { data } = await axios.get(`${API}/user/orders`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
