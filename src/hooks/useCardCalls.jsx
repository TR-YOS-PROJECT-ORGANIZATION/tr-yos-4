import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  fetchStart,
  fetchFail,
  getCompareListSuccess,
  getFavouriteListSuccess,
} from "../features/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { toastErrorNotify } from "../helper/ToastNotify";
const useCardCalls = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  const { favouriteList, compareList } = useSelector((state) => state.card);
  const currentUserId = currentUser?.user.userId
  // Add or Remove to Compare
  const moveToSelectedDepartments = async (id) => {
    const departmentId = id;
    try {
     const res = await axios.get(
        `https://tr-yös.com/api/v1/users/addcompare.php?user_id=${currentUserId}&id=${departmentId}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`
      );
      const newDeps = compareList?.departments ? compareList?.departments?.concat([res.data.id]) : [res?.data.id];
      dispatch(getCompareListSuccess({ departments: newDeps }));
    } catch (error) {
      console.log(error);
    }
  };
  const removeFromSelectedDepartments = async (id) => {
    const departmentId = id;
    try {
      const res =  await axios.get(
        `https://tr-yös.com/api/v1/users/deletecompare.php?user_id=${currentUserId}&id=${departmentId}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`
      );
      const newDeps = compareList?.departments?.filter(
        (f) => f !== res.data.id
      );
      dispatch(getCompareListSuccess({ departments: newDeps }));
    } catch (error) {
      console.log(error);
    }
  };
  //Add to Favourites///
  const moveToFavourites = async (id) => {
    const departmentId = id;
    try {
      const res = await axios.get(
        `https://tr-yös.com/api/v1/users/addfavorite.php?id=${departmentId}&user_id=${currentUserId}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`
      );
      const newDeps = favouriteList?.departments ? favouriteList?.departments?.concat([res.data.id])
      :[ res.data.id];
      dispatch(getFavouriteListSuccess({ departments: newDeps }));
    } catch (error) {
      console.log(error);
      toastErrorNotify(error);
    }
  };
  const removeFromFavourites = async (id) => {
    const departmentId = id;
    try {
      const res = await axios.get(
        `https://tr-yös.com/api/v1/users/deletefavorite.php?id=${departmentId}&user_id=${currentUserId}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`
      );
      const newDeps = favouriteList?.departments?.filter(
        (f) => f !== res.data.id
      );
      dispatch(getFavouriteListSuccess({ departments: newDeps }));
    } catch (error) {
      console.log(error);
    }
  };
  // Fetch compare and favorite lists
  const getCompareList = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        `https://tr-yös.com/api/v1/users/allcompares.php?user_id=${currentUser?.user.userId}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`
      );
      dispatch(getCompareListSuccess(data));
    } catch (error) {
      console.log(error);
      if (
        error.response.data.message
          ?.toString()
          .toLowerCase()
          .indexOf("no record") !== -1
      ) {
        // no record found hatası döndüğünde; favouriteList.department = [] yapıyoruz.
        dispatch(getCompareListSuccess({ departments: [] }));
      }
      dispatch(fetchFail());
    }
  };
  const getFavouriteList = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        `https://tr-yös.com/api/v1/users/allfavorites.php?user_id=${currentUser.user.userId}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`
      );
      dispatch(getFavouriteListSuccess(data));
    } catch (error) {
      console.log(error);
      if (
        error.response.data.message
          ?.toString()
          .toLowerCase()
          .indexOf("no record") !== -1
      ) {
        // no record found hatası döndüğünde; favouriteList.department = [] yapıyoruz.
        dispatch(getFavouriteListSuccess({ departments: [] }));
      }
      dispatch(fetchFail());
    }
  };
  return {
    getCompareList,
    moveToSelectedDepartments,
    removeFromSelectedDepartments,
    moveToFavourites,
    removeFromFavourites,
    getFavouriteList,
  };
};
export default useCardCalls;