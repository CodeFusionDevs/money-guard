import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../configAxios/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getTransactionsCategoriesThunk = createAsyncThunk(
  "getCategories",
  async (_, thunkApi) => {
    try {
      const { data } = await api.get("/transaction-categories");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addTransactionThunk = createAsyncThunk(
  "transactions/new",
  async (transaction, thunkApi) => {
    try {
      const { data } = await api.post("/transactions", transaction);
      toast.success("Transaction added successfully!", {
        position: "top-right",
        autoClose: 5000,
      });
      return data;
    } catch (error) {
      const { status } = error.response;
      if (status === 400) {
        toast.error("Validation error. Please check your input!", {
          position: "top-right",
          autoClose: 5000,
        });
      } else if (status === 401) {
        toast.error("User is not authorized!", {
          position: "top-right",
          autoClose: 5000,
        });
      } else if (status === 404) {
        toast.error("Resource not found!", {
          position: "top-right",
          autoClose: 5000,
        });
      } else if (status === 409) {
        toast.error("Conflict. Transaction already exists!", {
          position: "top-right",
          autoClose: 5000,
        });
      } else {
        toast.error("Error adding transaction!", {
          position: "top-right",
          autoClose: 5000,
        });
      }
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const allTransactionThunk = createAsyncThunk(
  "transactions/all",
  async (_, ThunkAPI) => {
    try {
      const { data } = await api.get("/transactions");
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updatedTransactionThunk = createAsyncThunk(
  "transactions/update",
  async ({ id, transactionData }, thunkAPI) => {
    try {
      const { data } = await api.patch(`/transactions/${id}`, transactionData);
      toast.success("Transaction updated successfully!", {
        position: "top-right",
        autoClose: 5000,
      });
      return data;
    } catch (error) {
      const { status } = error.response;
      if (status === 400) {
        toast.error("Validation error. Please check your input!", {
          position: "top-right",
          autoClose: 5000,
        });
      } else if (status === 401) {
        toast.error("User is not authorized!", {
          position: "top-right",
          autoClose: 5000,
        });
      } else if (status === 403) {
        toast.error("Forbidden. You are not allowed to perform this action!", {
          position: "top-right",
          autoClose: 5000,
        });
      } else if (status === 404) {
        toast.error("Transaction not found!", {
          position: "top-right",
          autoClose: 5000,
        });
      } else {
        toast.error("Error updating transaction!", {
          position: "top-right",
          autoClose: 5000,
        });
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  "transactions/delete",
  async (transactionId, thunkAPI) => {
    try {
      await api.delete(`/transactions/${transactionId}`);
      toast.success("Transaction deleted successfully!", {
        position: "top-right",
        autoClose: 5000,
      });
      return transactionId;
    } catch (error) {
      const { status } = error.response;
      if (status === 401) {
        toast.error("User is not authorized!", {
          position: "top-right",
          autoClose: 5000,
        });
      } else if (status === 404) {
        toast.error("Transaction not found!", {
          position: "top-right",
          autoClose: 5000,
        });
      } else if (status === 400) {
        toast.error("Bad request. Please check your input!", {
          position: "top-right",
          autoClose: 5000,
        });
      } else if (status === 403) {
        toast.error("Forbidden. You are not allowed to perform this action!", {
          position: "top-right",
          autoClose: 5000,
        });
      } else {
        toast.error("Error deleting transaction!", {
          position: "top-right",
          autoClose: 5000,
        });
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
