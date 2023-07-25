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

const AppRouter = () => {
  return (
    <div >

        <BrowserRouter>
          <Navbar /> 
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='Departments' element={<Departments />}></Route>
                <Route path='Universities' element={<UniversitiesPage/>}></Route>
                <Route path='departmentDetail/:code' element={<DepartmentDetail/>}></Route>                
                <Route path='compareList' element={<Compare/>}></Route>
                <Route path="myProfile" element={<MyProfile/>}></Route>
                <Route path="favourites" element={<Favourites/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>

    </div>
  )
}

export default AppRouter