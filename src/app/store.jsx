
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import infoReducer from '../features/infoSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    info: infoReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;