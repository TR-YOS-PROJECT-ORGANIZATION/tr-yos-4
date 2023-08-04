import { createSlice } from "@reduxjs/toolkit";
const cardSlice = createSlice({
  name: "card",
  initialState: {
    compareList: null,
    error: false,
    favouriteList: null,
    searchParameters: {},
  },
  reducers: {
    fetchStart: (state) => {
      state.error = false;
    },
    fetchFail: (state) => {
      state.error = true;
    },
    getCompareListSuccess: (state, { payload }) => {
      state.compareList = payload;
    },
    getFavouriteListSuccess: (state, { payload }) => {
      state.favouriteList = payload;
    },
    setSearchParameters: (state, { payload }) => {
      state.searchParameters = payload;
    },
  },
});
export const {
  fetchStart,
  fetchFail,
  getCompareListSuccess,
  getFavouriteListSuccess,
  setSearchParameters,
} = cardSlice.actions;
export default cardSlice.reducer;
