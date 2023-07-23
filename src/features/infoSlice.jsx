import { createSlice } from "@reduxjs/toolkit";
const infoSlice = createSlice({
  name: "info",
  initialState: {
    univercities:null,
    departments:null,
    allDepartments:null,
    cities:null,
    error: false,
    userInfo:null,
  },
  reducers: {
    fetchStart: (state) => {
      state.error = false;
    },
    getUniSuccess: (state, { payload }) => {
      state.univercities = payload;
    },
    getDepSuccess:(state, { payload })=> {
      state.departments = payload;
    },
    getDepAllSuccess:(state, { payload })=> {
      state.allDepartments = payload;
    },
    getCitiesSuccess:(state, { payload })=> {
      state.cities = payload;
    },
    fetchFail: (state) => {
      state.error = true;
    },
    getUserInfoSuccess:(state,{payload}) => {
      state.loading= false;
      state.userInfo = payload;
    },
  },
});
export const {
  fetchStart,
  getUniSuccess,
  fetchFail,
  getDepSuccess,
  getDepAllSuccess,
  getCitiesSuccess,
  getUserInfoSuccess,
} = infoSlice.actions;
export default infoSlice.reducer;







