import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalBalance: 0,
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    setTotalBalance(state, action) {
      state.totalBalance = action.payload;
    },
  },
});

export const { setTotalBalance } = balanceSlice.actions;

export default balanceSlice.reducer;
