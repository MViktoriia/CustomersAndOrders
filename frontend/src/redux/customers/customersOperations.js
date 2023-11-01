import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCustomers,
  addNewCustomer,
  updateCustomer,
  removeCustomer,
} from '../../services/api/customersAPI';

// const URL = 'http://localhost:3000/api/customers';

export const fetchCustomers = createAsyncThunk(
  'customers/fetchCustomers',
  async (_, thunkAPI) => {
    try {
      const response = await getCustomers();
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

export const addCustomer = createAsyncThunk(
  'customers/addCustomer',
  async (data, thunkAPI) => {
    try {
      const result = await addNewCustomer(data);

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

export const editCustomer = createAsyncThunk(
  'customers/editCustomer',
  async (data, thunkAPI) => {
    try {
      const result = await updateCustomer(data);
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

export const deleteCustomer = createAsyncThunk(
  'customers/deleteCustomer',
  async (id, thunkAPI) => {
    try {
      await removeCustomer(id);
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
