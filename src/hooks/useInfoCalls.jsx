import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  getUniSuccess,
  getDepSuccess,
  getUserInfoSuccess,
  getCitiesSuccess,
  getDepAllSuccess,
} from "../features/infoSlice";
import axios from "axios";
const useInfoCalls = () => {
  const dispatch = useDispatch();
  //!------------- GET CALLS ----------------
  const getUni = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        `https://tr-yös.com/api/v1/education/alluniversities.php?token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`
      );
      dispatch(getUniSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const getDepartments = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        "https://tr-yös.com/api/v1/education/alldepartmentsname.php?token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a"
      );
      dispatch(getDepSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const getAllDepartments = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        "https://tr-yös.com/api/v1/record/alldepartments.php?token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a"
      );
      dispatch(getDepAllSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const getCities = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        "https://tr-yös.com/api/v1/location/allcities.php?token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a"
      );
      dispatch(getCitiesSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  const getUserInfo = async (ID) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(
        `https://tr-yös.com/api/v1/users/user.php?id=${ID}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`
      );
      dispatch(getUserInfoSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };
  return { getUni, getDepartments, getCities, getUserInfo, getAllDepartments };
};
export default useInfoCalls;
