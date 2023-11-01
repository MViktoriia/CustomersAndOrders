import { instance } from './auth';

export const getCustomers = async () => {
  const { data } = await instance.get('/customers');
  return data;
};

export const getById = async id => {
  const { data } = await instance.get(`/customers/${id}`);
  return data;
};

export const addNewCustomer = async data => {
  const { data: result } = await instance.post('/customers', data);
  return result;
};

export const updateCustomer = async data => {
  const { _id } = data;
  const { data: result } = await instance.put(`/customers/${_id}`, data);
  return result;
};

export const removeCustomer = async id => {
  const { data: result } = await instance.delete(`/customers/${id}`);
  return result;
};
