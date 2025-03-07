import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { updateToken } from "../auth/operations";

const getStatistics = createAsyncThunk(
  "statistics/getStatistics",
  async (date, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.token;
      if (token) {
        updateToken(token);
      }
      const response = await axios.get("api/transactions-summary", {
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
