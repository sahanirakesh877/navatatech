import React , { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
 <header className="text-primary body-font border py-1 sticky top-0 w-full bg-white z-[99]">
  <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
    <Link className="flex  font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
      <img src="/navata-logo.png" className="w-16 h-16 text-white  rounded-full" viewbox="0 0 24 24" />NAVATA <span className="text-2xl text-primary ">TECH</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-4">
      <Link className="mr-5 hover:text-third" to="/">Home</Link>
      <Link className="mr-5 hover:text-third" to="/about">About</Link>
      <Link className="mr-5 hover:text-third" to="/services">Services</Link>
      <Link className="mr-5 hover:text-third" to="/blog">Teams</Link>
      <Link className="mr-5 hover:text-third" to="/contact">Contact</Link>
      <Link className="mr-5 hover:text-third" to="/jobs">Carrers & Jobs</Link>

    </nav>
    <div className="flex items-center gap-4 ">

    <Link to='/login'>
    <button type="button" class="text-white bg-sec hover:bg-primary font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2   ">Login</button>

     </Link>


      <Link to='/signup'>
      <button type="button" class="text-white bg-sec hover:bg-primary  font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2   ">Register</button>

      </Link>
      
    </div>
  </div>
</header> 


    </>
  )
}

export default Header
