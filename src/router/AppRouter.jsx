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
import UniversitiesDetail from '../pages/universitiesDetail/UniversitiesDetail';

const AppRouter = () => {

  return (
    <div >

      <BrowserRouter>

        <Navbar />
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/departments' element={<Departments />} />
          <Route path='/universities' element={<UniversitiesPage />} />
          
          <Route path="/univercitiesDetail/:code" element={<UniversitiesDetail />} />


          <Route path="/departmentDetail/:code" element={<PrivateRouter />}>
            <Route path="" element={<DepartmentDetail />} />
          </Route>

          <Route path="/compare" element={<PrivateRouter />}>
          <Route path="" element={<Compare/>} />
          </Route>          

          <Route path="/myProfile" element={<PrivateRouter />}>
          <Route path="" element={<MyProfile />} />
          </Route>


          <Route path="/favourites" element={<PrivateRouter />}>
            <Route path="" element={<Favourites />} />
          </Route>
        </Routes>



        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default AppRouter