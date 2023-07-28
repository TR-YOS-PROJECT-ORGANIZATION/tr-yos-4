import { createSlice } from "@reduxjs/toolkit";
const cardSlice = createSlice({
    name: "card",
    initialState: {
        compareList: null,
        error: false,
    },
    reducers: {
        fetchStart: (state) => {
            state.error = false
        },
        fetchFail: (state) => {
            state.error = true
        },
        getListSuccess: (state, {payload}) => {
            state.compareList = payload
        } 

    },
});

export const { fetchStart, fetchFail, getListSuccess} = cardSlice.actions;

export default cardSlice.reducer