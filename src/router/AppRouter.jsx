// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from '../pages/HomePage';
import Footer from '../footer/Footer';
import Departments from '../pages/Departments';
import UniversitiesPage from '../pages/universitiesPages/UniversitiesPage'
import Navbar from '../components/Navbar';
import Favourites from '../pages/Favourites'
import DepartmentDetail from '../pages/departmentDetail/DepartmentDetail';
import MyProfile from "../pages/myAccount/MyProfile";
import Compare from '../pages/Compare'
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
  return (
    <div >

        <BrowserRouter>
          <Navbar /> 
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='departments' element={<Departments />}></Route>
                <Route path='universities' element={<UniversitiesPage/>}></Route>
                <Route path='about' element={<Footer/>}></Route>
                <Route path='departmentDetail/:code' element={<DepartmentDetail/>}></Route>
                <Route path='compare' element={<Compare/>}></Route>
                <Route path="myProfile" element={<MyProfile/>}></Route>
                <Route path="favourites" element={<Favourites/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>

    </div>
  )
}

export default AppRouter