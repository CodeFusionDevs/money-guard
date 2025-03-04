import { createSlice } from "@reduxjs/toolkit";
import {
  getTransactions,
  getCategories,
  createTransaction,
  editTransaction,
  deleteTransaction,
} from "./operations";

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
        console.log("getTransactions fulfilled:", action.payload);
        state.transactions = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTransactions.rejected, (state, action) => {
        console.log("getTransactions rejected:", action.payload);
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        console.log("getCategories fulfilled:", action.payload);
        state.transactionCategories = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.rejected, (state, action) => {
        console.log("getCategories rejected:", action.payload);
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        console.log("createTransaction fulfilled:", action.payload);
        state.transactions.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTransaction.rejected, (state, action) => {
        console.log("createTransaction rejected:", action.payload);
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editTransaction.fulfilled, (state, action) => {
        console.log("editTransaction fulfilled:", action.payload);
        state.transactions = state.transactions.map((transaction) =>
          // Burada bi sıkıntı var sanki. Ama yok da gibi.
          transaction.id === action.payload.id ? action.payload : transaction
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(editTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editTransaction.rejected, (state, action) => {
        console.log("editTransaction rejected:", action.payload);
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        console.log("deleteTransaction fulfilled:", action.payload);
        state.transactions = state.transactions.filter(
          (transaction) => transaction.id !== action.payload.id
        );
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        console.log("deleteTransaction rejected:", action.payload);
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addTransactionCategory, deleteTransactionCategory } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
