import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrencyRates } from "./operations";

const initialState = {
  rates: {},
  loading: false,
  error: null,
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencyRates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrencyRates.fulfilled, (state, action) => {
        state.loading = false;
        state.rates = action.payload.rates; // Ensure the correct path to rates
      })
      .addCase(fetchCurrencyRates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const currencyReducer = currencySlice.reducer;
