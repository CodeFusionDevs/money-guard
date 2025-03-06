import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

console.log("Kütüphanenin statistik için ne göndereceğini bilmek gerekiyor.");

const getStatistics = createAsyncThunk(
  "statistics/getStatistics",
  async (date, thunkAPI) => {
    try {
      console.log("getStatistics dates", date);
      const response = await axios.get("api/transactions-summary", {
        params: {
          month: date.month,
          year: date.year,
        },
      });
      console.log("Get Statistics response", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export { getStatistics };
