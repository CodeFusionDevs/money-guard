import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://api.monobank.ua";

// CodeA ve CodeB kısımlarının incelenmesi gerekiyor.
// Anlamları: 840 -> USD, 978 -> EUR, 980 -> UAH, 949 -> TRY
export const fetchCurrency = createAsyncThunk(
  "currency/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/bank/currency`);
      const usdEurRates = response.data.filter(
        (rate) =>
          (rate.currencyCodeA === 840 ||
            rate.currencyCodeA === 978 ||
            rate.currencyCodeA === 949) &&
          rate.currencyCodeB === 980
      );
      return usdEurRates;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
