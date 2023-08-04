// eslint-disable-next-line no-unused-vars
import React from "react";
import Dashboard from "./Dashboard";
import MyAccountSettings from "./MyAccountSettings";
import { useSelector } from "react-redux";
import useInfoCalls from "../../hooks/useInfoCalls";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const MyProfile = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const { getUserInfo } = useInfoCalls();
  const {t} = useTranslation();

  useEffect(() => {
    getUserInfo(currentUser?.userID);
  }, [currentUser]);

  const { userInfo } = useSelector((state) => state.info);


  return (
    <div>
      <div className="bg-green-dark text-white-cream w-full flex-auto h-28 flex items-center justify-start text-5xl pl-20 sm:w-full xs:w-full">
        <h1>{t("My Account")}</h1>
      </div>
      <div className="border-2 flex flex-col items-center rounded-lg shadow-grey-primary h-full">
        <p className="text-4xl font-bold p-5">{t("My Account")}</p>
        <div className="flex justify-center h-full md:w-full xs:w-full xs:flex-col xs:items-center">
          <Dashboard userInfo={userInfo} />
          <MyAccountSettings userInfo={userInfo} currentUser={currentUser} getUserInfo={getUserInfo}/>
        </div>
      </div>
    </div>
  );
};
export default MyProfile;
