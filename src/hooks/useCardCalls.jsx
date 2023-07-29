import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { fetchStart, fetchFail, getListSuccess } from '../features/cardSlice';
import { useDispatch } from 'react-redux';

const  useCardCalls = () => {
    const dispatch = useDispatch();

    // const moveToSelectedDepartments = (id) => {
    //     const currentUserId = currentUser.userID;
    //     const departmentId = id

    //     try {
    //         axios.get(`https://tr-yös.com/api/v1/users/addcompare.php?id=${departmentId}&user_id=${currentUserId}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`);
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    //     setCompareList((prevState) => [...prevState, departmentId]);
    //     console.log(compareList)
    // }


    const getCompareList = async (currentUserId) => {
        dispatch(fetchStart())

        try {
            
            const {data} = await axios.get(`https://tr-yös.com/api/v1/users/allcompares.php?user_id=${currentUserId}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`);
            dispatch(getListSuccess(data));
            console.log(data)
        } catch (error) {
            console.log(error);
            dispatch(fetchFail())
        }
    }

    return { getCompareList }
}

export default useCardCalls