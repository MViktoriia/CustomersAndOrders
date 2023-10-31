import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'http://localhost:3000/api/customers';

export const fetchCustomers = createAsyncThunk(
  'customers/fetchCustomers',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data;
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
      const result = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
      });

      const resultJSON = await result.json();
      return resultJSON;
    } catch ({ response }) {
      const error = {
        status: response.data.status,
        message: response.data.message,
      };

      return thunkAPI.rejectWithValue(error);
    }
  }
);
