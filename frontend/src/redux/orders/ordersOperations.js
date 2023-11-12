import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getOrders,
  addNewOrder,
  removeOrder,
  updateOrder,
} from '../../services/api/ordersAPI';

export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async (_, thunkAPI) => {
    try {
      const response = await getOrders();
      return response;
    } catch ({ response }) {
      const error = {
        status: response.data.status,
        message: response.data.message,
      };

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addOrder = createAsyncThunk(
  'orders/addOrder',
  async (data, thunkAPI) => {
    try {
      const result = await addNewOrder(data);

      return result;
    } catch ({ response }) {
      const error = {
        status: response.data.status,
        message: response.data.message,
      };

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editOrder = createAsyncThunk(
  'orders/editOrder',
  async (data, thunkAPI) => {
    try {
      const result = await updateOrder(data);
      return result;
    } catch ({ response }) {
      const error = {
        status: response.data.status,
        message: response.data.message,
      };

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteOrder = createAsyncThunk(
  'orders/deleteOrder',
  async (id, thunkAPI) => {
    try {
      await removeOrder(id);
      return id;
    } catch ({ response }) {
      const error = {
        status: response.data.status,
        message: response.data.message,
      };

      return thunkAPI.rejectWithValue(error);
    }
  }
);
