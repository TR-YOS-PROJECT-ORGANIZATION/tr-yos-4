import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { toastWarnNotify } from "../helper/ToastNotify";

const PrivateRouter = () => {
  let { currentUser } = useSelector((state) => state.auth);


  return(
    <>
      {  currentUser ? <Outlet /> : toastWarnNotify("Please login")}
    </>
  ) 
};

export default PrivateRouter;