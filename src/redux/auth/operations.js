import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://wallet.b.goit.study";

// AXIOS SETTINGS
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";

const updateToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = null;
};

// ------------------------------------------------------------
// USERS CONTROLLER
const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/users/current`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
// ------------------------------------------------------------

// ------------------------------------------------------------
// AUTH CONTROLLER
const signup = createAsyncThunk(
  "auth/signup",
  async (registerCredentials, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/auth/signup`,
        registerCredentials
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const login = createAsyncThunk(
  "auth/login",
  async (loginCredentials, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/auth/login`,
        loginCredentials
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await axios.delete(`${BASE_URL}/api/auth/logout`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
// ------------------------------------------------------------

export { updateToken, clearToken, getCurrentUser, signup, login, logout };
