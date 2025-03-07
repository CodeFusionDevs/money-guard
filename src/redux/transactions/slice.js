import { createSlice } from "@reduxjs/toolkit";
import {
  getTransactions,
  getCategories,
  createTransaction,
  editTransaction,
  deleteTransaction,
} from "./operations";
import { toast } from "react-toastify";
import { getCurrentUser } from "../auth/operations";

const initialState = {
  transactions: [],
  transactionCategories: [],
  isLoading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransactionCategory: (state, action) => {
      const existingCategory = state.transactionCategories.find(
        (category) => category.id === action.payload.id
      );
      if (existingCategory) {
        existingCategory.name = action.payload.name;
      } else {
        state.transactionCategories.push(action.payload);
      }
    },
    deleteTransactionCategory: (state, action) => {
      state.transactionCategories = state.transactionCategories.filter(
        (category) => category.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.transactionCategories = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        toast.success("Transaction created successfully");
        state.transactions.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTransaction.rejected, (state, action) => {
        toast.error("Transaction creation failed");
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editTransaction.fulfilled, (state, action) => {
        toast.success("Transaction updated successfully");
        state.transactions = state.transactions.map((transaction) =>
          transaction.id === action.payload.id ? action.payload : transaction
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editTransaction.rejected, (state, action) => {
        toast.error("Transaction update failed");
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        toast.success("Transaction deleted successfully");
        state.transactions = state.transactions.filter(
          (transaction) => transaction.id !== action.payload.id
        );
        state.isLoading = false;
        state.error = null;
        getCurrentUser();
      })
      .addCase(deleteTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        toast.error("Transaction deletion failed");
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addTransactionCategory, deleteTransactionCategory } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
