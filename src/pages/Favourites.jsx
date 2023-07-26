// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import useInfoCalls from "../hooks/useInfoCalls";
import OneCard from "../components/card/OneCard";
import WorkUs from '../components/workUs/WorkUs'

function Favourites() {
    const { currentUser } = useSelector((state) => state?.auth);
    const { departments } = useSelector((state) => state?.info);
    const { getUserInfo, getDepartments } = useInfoCalls();
    const [favouriteList, setFavouriteList] = useState();

    useEffect(() => {
        getUserInfo(currentUser.userID);
    }, [currentUser]);

    useEffect(() => {
        getDepartments();
    }, [])

    async function getFavouriteList() {

        const currentUserId = currentUser.userID;
        try {
            await axios.get(`https://tr-yös.com/api/v1/users/allfavorites.php?user_id=${currentUserId}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`).then(({ data }) => setFavouriteList(data))
            console.log(favouriteList);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getFavouriteList();
    }, [])


    const removeFromFavourites = (id) => {
        const currentUserId = currentUser.userID;
        const departmentId = id

        try {
            axios.get(`https://tr-yös.com/api/v1/users/deletefavorite.php?id=${departmentId}&user_id=${currentUserId}&token=KE4ekFg1YPngkIbjMP/5JdBtisNVE076kWUW7TPz8iGaHT8te/i2nrAycAGnwAL5ZRitK5Rb4VwDp6JEfab5b0d5dfc31a7d39edf5370b8a067a`).then(()=>getFavouriteList());
        } catch (error) {
            console.log(error);
        }
        // setFavouriteList(prevState => prevState.filter((item) => item !== departmentId));
        console.log(favouriteList);
    }

    const filteredDepartments = departments?.filter((department) => favouriteList?.departments.map((item) => item).includes(department.id));


    return (
        <div className='mt-20'>
            <div>
                <div >
                    <h2 className="w-full h-36 bg-green-dark pl-28 pt-8 text-5xl text-left text-white-cream font-bold" >
                        {/*  */}
                        My Favorite Departments
                    </h2>
                </div>

                <div className="grid grid-cols-4">
                    {
                        filteredDepartments?.map((item) =>
                            <div key={item.id}>
                                <OneCard
                                    facultyCode={item.facultyCode}
                                    en={item.en}
                                    tr={item.tr}
                                    item={item}
                                    id={item.id}
                                    //   moveToSelectedDepartments={moveToSelectedDepartments}
                                    //   removeFromSelectedDepartments={removeFromSelectedDepartments}
                                    //   moveToFavourites = {moveToFavourites}
                                    removeFromFavourites={removeFromFavourites}
                                    //   isInCompare={compareList.includes(item.id)}
                                    isInFavourite={true}
                                />
                            </div>
                        )}
                </div>
                <WorkUs />
            </div>
        </div>
    )
}

export default Favourites;