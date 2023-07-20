

import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: "info",

  initialState: {
    univercities:null,
    departments:null,
    cities:null,
    error: false,
    loading:false,
  },

  
  reducers: {
    fetchStart: (state) => {
      state.error = false;
      state.loading = true;

    },
    getUniSuccess: (state, { payload }) => {
      state.loading= false;
      state.univercities = payload;
      
      
    },

    getDepSuccess:(state, { payload })=> {
      state.loading= false;
      state.departments = payload;
     
    },

    getCitiesSuccess:(state, { payload })=> {
      state.loading= false;
      state.cities = payload;

    },
  
    fetchFail: (state) => {
      state.loading= false;
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

