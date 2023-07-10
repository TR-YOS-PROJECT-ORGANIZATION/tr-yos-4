import React from 'react'
import image from '../images/university.png'

const Navbar = () => {
  return (
    <>
    <div className='w-full h-10 bg-green-dark pl-32 pt-8'>
    <img src={image}></img>
    </div>
       <nav className='rounded flex justify-around py-5 font-bold text-lg'>
       <div className='mt-1'>

      <a className='mx-3'>Home Page</a>
      <a className='mx-3'>Universities</a>
      <a className='mx-3'>Departments</a>

    </div>
    <div >
        <button className='mx-3 bg-red-retro py-3 px-5 rounded text-gray-base'>Sign In</button>
        <button className='mx-3 bg-red-warm py-3 px-5 rounded text-gray-base'>Sign Up</button>

    </div>
    </nav>


    </>
   
  )
}

export default Navbar