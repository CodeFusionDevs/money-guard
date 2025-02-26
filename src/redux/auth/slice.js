import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, signup, login, logout } from "./operations";
import { updateToken, clearToken } from "./operations";

const initialState = {
  user: {
    id: null,
    name: null,
    email: null,
    balance: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        console.log("getCurrentUser fulfilled:", action.payload);
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        console.log("getCurrentUser rejected:", action.payload);
        state.isRefreshing = false;
        state.error = action.payload;
        state.user = {
          id: null,
          name: null,
          email: null,
          balance: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        clearToken();
      })
      .addCase(signup.fulfilled, (state, action) => {
        console.log("signup fulfilled:", action.payload);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
        updateToken(action.payload.token);
      })
      .addCase(signup.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(signup.rejected, (state, action) => {
        console.log("signup rejected:", action.payload);
        state.isRefreshing = false;
        state.error = action.payload;
        state.user = {
          id: null,
          name: null,
          email: null,
          balance: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        clearToken();
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log("login fulfilled:", action.payload);
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
        updateToken(action.payload.token);
      })
      .addCase(login.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(login.rejected, (state, action) => {
        console.log("login rejected:", action.payload);
        state.isRefreshing = false;
        state.error = action.payload;
        state.user = {
          id: null,
          name: null,
          email: null,
          balance: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        clearToken();
      })
      .addCase(logout.fulfilled, (state) => {
        console.log("logout fulfilled");
        state.user = {
          id: null,
          name: null,
          email: null,
          balance: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        clearToken();
      })
      .addCase(logout.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(logout.rejected, (state, action) => {
        console.log("logout rejected:", action.payload);
        state.isRefreshing = false;
        state.error = action.payload;
        state.user = {
          id: null,
          name: null,
          email: null,
          balance: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        clearToken();
      });
  },
});

export default authSlice.reducer;
