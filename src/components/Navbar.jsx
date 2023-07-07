import React from 'react'

const Navbar = () => {
  return (
    <nav className='mrounded flex justify-evenly py-5 bg-blue-light font-bold text-lg'>
    <div className='mt-1'>
      <a className='mx-3'>Home Page</a>
      <a className='mx-3'>Universities</a>
      <a className='mx-3'>Departments</a>

    </div>
    <div >
        <button className='mx-3 bg-purple-light py-3 px-5 rounded text-white '>Sign In</button>
        <button className='mx-3 bg-purple-base py-3 px-5 rounded '>Sign Up</button>

    </div>
    </nav>
  )
}

export default Navbar