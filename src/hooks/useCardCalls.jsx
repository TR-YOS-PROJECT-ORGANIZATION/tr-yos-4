import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { fetchStart, fetchFail, getCompareListSuccess, getFavouriteListSuccess } from '../features/cardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toastErrorNotify } from '../helper/ToastNotify';
const  useCardCalls = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state)=>state.auth);

    // Add or Remove to Compare
    const moveToSelectedDepartments = async (id) => {
        const currentUserId = currentUser?.userID;
        const departmentId = id
        try {
          await axios.get(`https://tr-yös.com/api/v1/users/addcompare.php?user_id=${currentUserId}&id=${departmentId}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`);
        }
        catch (error) {
          console.log(error);
          toastErrorNotify(error.response.data.message)
        }
      }
      const removeFromSelectedDepartments = async (id) => {
        const currentUserId = currentUser.userID;
        const departmentId = id
        try {
          await axios.get(`https://tr-yös.com/api/v1/users/deletecompare.php?user_id=${currentUserId}&id=${departmentId}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`);
          getCompareList();
        } catch (error) {
          console.log(error);
        }
      }
      //Add to Favourites///
      const moveToFavourites = async (id) => {
        const currentUserId = currentUser.userID;
        const departmentId = id
        try {
          await axios.get(`https://tr-yös.com/api/v1/users/addfavorite.php?id=${departmentId}&user_id=${currentUserId}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`);
        }
        catch (error) {
          console.log(error);
          toastErrorNotify(error)
        }
      }
      const removeFromFavourites = async (id) => {
        const currentUserId = currentUser.userID;
        const departmentId = id
        try {
          await axios.get(`https://tr-yös.com/api/v1/users/deletefavorite.php?id=${departmentId}&user_id=${currentUserId}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`);
          getFavouriteList();
        } catch (error) {
          console.log(error);
        }
      }
    // Fetch compare and favorite lists
    const getCompareList = async () => {
        dispatch(fetchStart())
        try {
            const {data} = await axios.get(`https://tr-yös.com/api/v1/users/allcompares.php?user_id=${currentUser.userID}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`);
            dispatch(getCompareListSuccess(data));
        } catch (error) {
            console.log(error);
            dispatch(fetchFail())
        }
    }
    const getFavouriteList = async () => {
        dispatch(fetchStart())
        try {
            const {data} = await axios.get(`https://tr-yös.com/api/v1/users/allfavorites.php?user_id=${currentUser.userID}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`);
            dispatch(getFavouriteListSuccess(data));
        } catch (error) {
            console.log(error);
            dispatch(fetchFail())
        }
    }
    return { getCompareList,moveToSelectedDepartments,removeFromSelectedDepartments ,moveToFavourites,removeFromFavourites,getFavouriteList}
}
export default useCardCalls