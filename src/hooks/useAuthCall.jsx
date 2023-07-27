import React from 'react';
import axios from 'axios';
import { registerSuccess, fetchFail,fetchStart, loginSuccess, logoutSuccess} from '../features/authSlice';
import { useDispatch } from 'react-redux';
import { toastErrorNotify,toastSuccessNotify } from '../helper/ToastNotify';
import { Outlet, useNavigate } from 'react-router-dom';

const useAuthCall = () => {

    const dispatch = useDispatch();

    const BASE_URL = 'https://tr-yös.com';
    // const BASE_URL = 'http://localhost:8010/proxy';


   const navigate = useNavigate();


    const register = async (userInfo) => {
        dispatch(fetchStart());
        try {
          const { data } = await axios.put(
            `/api/v1/users/newuser2.php?token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`,
          userInfo
          );
          dispatch(registerSuccess(data));
          toastSuccessNotify("Register performed");
         

        } catch (error) {
          console.log(error);
          console.log(userInfo)
          dispatch(fetchFail());
          toastErrorNotify("Register can not be performed");
        }
      };

      const login = async (userInfo) => {
        dispatch(fetchStart());
        try {
          const { data } = await axios.post(
            `${BASE_URL}/api/v1/users/login.php?token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`,
            userInfo,
            { headers: { "Content-Type": "multipart/form-data" }}
          );
          dispatch(loginSuccess(data));
          
          toastSuccessNotify("Login performed");
          console.log(data)
         

        } catch (error) {
          console.log(error);
          console.log(userInfo)
          dispatch(fetchFail());
          toastErrorNotify("Login can not be performed");
        }
      };

      const logout = () => {
        dispatch(logoutSuccess());
        navigate('/');
        toastSuccessNotify("Logout performed");
      };

    
     
  return {register,login,logout}
  
}

export default useAuthCall



