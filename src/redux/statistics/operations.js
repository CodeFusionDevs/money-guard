import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

console.log("Kütüphanenin statistik için ne göndereceğini bilmek gerekiyor.");

const getStatistics = createAsyncThunk(
  "statistics/getStatistics",
  async (date, thunkAPI) => {
    try {
      const response = await axios.get("/statistics", {
        params: {
          month: date.month,
          year: date.year,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export { getStatistics };
