import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",

    initialState:{
        currentUser:null,
        error:false,
        
    },



    reducers:{
        fetchStart: (state) => {
            state.error = false;
          },
        registerSuccess:(state, {payload}) =>{
            state.currentUser = payload?.name;
            state.error = false;
        },
        fetchFail: (state) => {
            state.error = true;
          },
    }

    }
)

export const {
   
    registerSuccess,
    fetchFail,
    fetchStart
  
  } = authSlice.actions;


  export default authSlice.reducer;