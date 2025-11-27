import React from 'react'
import ButtonRoute from './ButtonRoute'

const Navbar = () => {
  return (
  
     <nav className="bg-white">
    <div className="flex items-center justify-between w-full max-w-[1130px] py-[22px] mx-auto">
      <a href="index.html">
        <img src="/assets/images/logos/logo.svg" alt="logo" />
      </a>
      <ul className="flex items-center gap-[50px] w-fit">
        <li>
          <a href="">Browse</a>
        </li>
        <li>
          <a href="">Popular</a>
        </li>
        <li>
          <a href="">Categories</a>
        </li>
        <li>
          <a href="">Events</a>
        </li>
        <li>
          <a href="view-booking-details.html">My Booking</a>
        </li>
      </ul>
     <ButtonRoute Route='/auth/login' text='Login'/>
    </div>
  </nav>

  )
}

export default Navbar