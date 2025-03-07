import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { updateToken } from "../auth/operations";

const BASE_URL = "https://wallet.b.goit.study";

axios.defaults.headers.common["Content-Type"] = "application/json";

const getTransactions = createAsyncThunk(
  "transactions/getTransactions",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      if (token) {
        updateToken(token);
      }
      const response = await axios.get(`${BASE_URL}/api/transactions`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const getCategories = createAsyncThunk(
  "transactions/getCategories",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      if (token) {
        updateToken(token);
      }
      const response = await axios.get(
        `${BASE_URL}/api/transaction-categories`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const createTransaction = createAsyncThunk(
  "transactions/createTransaction",
  async (transactionData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      if (token) {
        updateToken(token);
      }
      const response = await axios.post(
        `${BASE_URL}/api/transactions`,
        transactionData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const editTransaction = createAsyncThunk(
  "transactions/editTransaction",
  async (transactionData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      if (token) {
        updateToken(token);
      }
      const response = await axios.patch(
        `${BASE_URL}/api/transactions/${transactionData.id}`,
        {
          transactionDate: transactionData.transactionDate,
          type: transactionData.type,
          comment: transactionData.comment,
          amount: transactionData.amount,
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const deleteTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async (transactionId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      if (token) {
        updateToken(token);
      }
      const response = await axios.delete(
        `${BASE_URL}/api/transactions/${transactionId}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export {
  getTransactions,
  getCategories,
  createTransaction,
  editTransaction,
  deleteTransaction,
};
