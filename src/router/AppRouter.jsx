import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from '../pages/HomePage';
import Footer from '../footer/Footer';
import Departments from '../pages/Departments';
import UniversitiesPage from '../pages/UniversitiesPage'
import Navbar from '../components/Navbar';

// import Register from '../components/Register';



const AppRouter = () => {
  return (
    <div >

        <BrowserRouter>
            <Navbar />
           
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='Departments' element={<Departments />}></Route>
                <Route path='Universities' element={<UniversitiesPage/>}></Route>
                <Route path='about' element={<Footer/>}></Route>

                

                
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter