import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    userId: null,
    error: false,
    loading:false,
  },

  reducers: {
    fetchStart: (state) => {
      state.error = false;
      state.loading = true;
    },
    registerSuccess: (state, { payload }) => {
      state.userId = payload;
      state.error = false;
      state.loading = false;
    },
    fetchFail: (state) => {
      state.error = true;
      state.loading = false;
    },
    loginSuccess: (state, { payload }) => {
      state.userId= payload;
      state.loading = false;


    },
    logoutSuccess: (state) => {
      state.userId = null;
      state.loading = false;

    },


  },
});


export const {
  registerSuccess,
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
