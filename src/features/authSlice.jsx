import { createSlice, current } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    error: false,
    loading:false,
  },

  reducers: {
    fetchStart: (state) => {
      state.error = false;
      state.loading = true;
    },
    registerSuccess: (state, { payload }) => {
      state.currentUser = payload;
      state.error = false;
      state.loading = false;
    },
    fetchFail: (state) => {
      state.error = true;
      state.loading = false;
    },
    loginSuccess: (state, { payload }) => {
      state.currentUser = payload;
      state.loading = false;


    },
    logoutSuccess: (state) => {
      state.currentUser = null;
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
