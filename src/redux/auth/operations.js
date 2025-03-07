import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://wallet.b.goit.study";


axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Content-Type"] = "application/json";

const updateToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  axios.defaults.headers.common.Authorization = null;
};


const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, thunkAPI) => {

    const token = thunkAPI.getState().auth.token;
    if (token) {
      updateToken(token);
    }
    try {
      const response = await axios.get(`${BASE_URL}/api/users/current`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


const signup = createAsyncThunk(
  "auth/signup",
  async (registerCredentials, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/api/auth/sign-up`,
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
        `${BASE_URL}/api/auth/sign-in`,
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
    const response = await axios.delete(`${BASE_URL}/api/auth/sign-out`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export { updateToken, clearToken, getCurrentUser, signup, login, logout };
