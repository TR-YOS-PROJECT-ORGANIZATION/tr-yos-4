import { createSlice } from "@reduxjs/toolkit";
const cardSlice = createSlice({
    name: "card",
    initialState: {
        compareList: null,
        error: false,
        favouriteList:null,
    },
    reducers: {
        fetchStart: (state) => {
            state.error = false
        },
        fetchFail: (state) => {
            state.error = true
        },
        getCompareListSuccess: (state, {payload}) => {
            state.compareList = payload
        } ,
        getFavouriteListSuccess: (state, {payload}) => {
            state.favouriteList = payload
        }
    },
});
export const { fetchStart, fetchFail, getCompareListSuccess,getFavouriteListSuccess} = cardSlice.actions;
export default cardSlice.reducer