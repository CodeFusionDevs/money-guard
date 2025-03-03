import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const AppId = "b62eb79a7add427d819f49f3ce24b362";

export const fetchCurrencyRates = createAsyncThunk(
  "currency/fetchCurrency",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://openexchangerates.org/api/latest.json?app_id=${AppId}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
