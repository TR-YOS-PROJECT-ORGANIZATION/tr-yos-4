import React from 'react';
import axios from 'axios';
import { registerSuccess, fetchFail,fetchStart } from '../features/authSlice';
import { useDispatch } from 'react-redux';
import { toastErrorNotify,toastSuccessNotify } from '../helper/ToastNotify';
import { useNavigate } from 'react-router-dom';

const useAuthCall = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const BASE_URL = 'https://www.tr-yös.com/api/v1/users/';


    const register = async (userInfo) => {
        dispatch(fetchStart());
        try {
          const { data } = await axios.post(
            `${BASE_URL}newuser2.php?token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`,
          userInfo
          );
          dispatch(registerSuccess(data));
          toastSuccessNotify("Register performed");
          navigate('/');

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
            `${BASE_URL}login.php?token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`,
          userInfo
          );
          dispatch(loginSuccess(data));
          toastSuccessNotify("Login performed");
          navigate('/');

        } catch (error) {
          console.log(error);
          console.log(userInfo)
          dispatch(fetchFail());
          toastErrorNotify("Login can not be performed");
        }
      };
  return {register,login}
  
}

export default useAuthCall



