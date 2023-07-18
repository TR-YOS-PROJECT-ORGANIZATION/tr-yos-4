import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: "info",

  initialState: {
    univercities:null,
    departments:null,
    cities:null,
    error: false,
  },

  
  reducers: {
    fetchStart: (state) => {
      state.error = false;
    },
    getUniSuccess: (state, { payload }) => {
      state.univercities = payload.univercities;
    },

    getDepSuccess:(state, { payload })=> {
      state.departments = payload.departments;
    },

    getCitiesSuccess:(state, { payload })=> {
      state.cities = payload.cities;
    },
  
    fetchFail: (state) => {
      state.error = true;
    },
  },
});



export const {
  fetchStart,
  getUniSuccess,
  fetchFail,
  getDepSuccess,
  getCitiesSuccess
  
} = infoSlice.actions;

export default infoSlice.reducer;