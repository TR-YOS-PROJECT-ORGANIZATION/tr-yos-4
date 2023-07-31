import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { toastWarnNotify } from "../helper/ToastNotify";
import SignInModal from "../components/modals/SignInModal";
import { useState,useEffect } from "react";

const PrivateRouter = () => {


   
  let { currentUser } = useSelector((state) => state.auth);
  return (<div>{ currentUser ? <Outlet/> :<Navigate to="/" />}</div>)

   
};

export default PrivateRouter;