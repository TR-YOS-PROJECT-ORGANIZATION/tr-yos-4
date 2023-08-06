import React from 'react';
import axios from 'axios';
import { registerSuccess, fetchFail,fetchStart, loginSuccess, logoutSuccess} from '../features/authSlice';
import { useDispatch } from 'react-redux';
import { toastErrorNotify,toastSuccessNotify } from '../helper/ToastNotify';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const useAuthCall = () => {

    const dispatch = useDispatch();

    const BASE_URL = 'https://tr-yös.com';
    // const BASE_URL = 'http://localhost:8010/proxy';


   const navigate = useNavigate();
   const {t} = useTranslation();


    const register = async (userInfo) => {
        dispatch(fetchStart());
        try {
          const { data } = await axios.put(
            `/api/v1/users/newuser2.php?token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`,
          userInfo
          );
       
          dispatch(registerSuccess(data.user.userId));
          console.log("register", data);
          toast.success(t("Register performed"));
         

        } catch (error) {
          console.log(error);
          dispatch(fetchFail());
          toast.error(t("Register can not be performed"));
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
          dispatch(loginSuccess(data.userID));
          
          toast.success(t("Login performed"));
          console.log("login", data)

        } catch (error) {
          console.log(error);
          dispatch(fetchFail());
          toast.error(t("Login can not be performed"));
        }
      };

      const logout = () => {
        dispatch(logoutSuccess());
        navigate('/');
        toast.success(t("Logout performed"));
      };

    
     
  return {register,login,logout}
  
}

export default useAuthCall



