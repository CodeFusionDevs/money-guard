import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, signup, login, logout } from "./operations";
import { updateToken, clearToken } from "./operations";
import { toast } from "react-toastify";
const initialState = {
  user: {
    id: "",
    name: "",
    email: "",
    balance: "",
  },
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
        state.user = {
          id: null,
          name: null,
          email: null,
          balance: null,
        };
      })
      .addCase(signup.fulfilled, (state, action) => {
        toast.success("Signup successful");
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
        toast.error("Signup failed");
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
        toast.success("Login successful");
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
        toast.error("Login failed");
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
        toast.success("Logout successful");
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
        toast.error("Logout failed");
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
