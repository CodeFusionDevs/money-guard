import { createSelector } from "@reduxjs/toolkit";

const selectCurrencyState = (state) => state.currency;

export const selectCurrencyRates = createSelector(
  [selectCurrencyState],
  (currencyState) => (currencyState ? currencyState.rates : {})
);
