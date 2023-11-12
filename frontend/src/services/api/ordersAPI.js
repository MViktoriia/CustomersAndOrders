import { instance } from './auth';

export const getOrders = async () => {
  const { data } = await instance.get('/orders');
  return data;
};

// export const getById = async id => {
//   const { data } = await instance.get(`/orders/${id}`);
//   return data;
// };

export const addNewOrder = async data => {
  const { data: result } = await instance.post('/orders', data);
  return result;
};

export const updateOrder = async data => {
  const { _id } = data;
  const { data: result } = await instance.put(`/orders/${_id}`, data);
  return result;
};

export const removeOrder = async id => {
  const { data: result } = await instance.delete(`/orders/${id}`);
  return result;
};
