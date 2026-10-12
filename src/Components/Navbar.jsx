import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <h2>Hotel Management</h2>
            <Link to="/">Home</Link>
            <Link to="/rooms">Rooms</Link>
            <Link to="/book">Book Room</Link>
            <Link to="/bookings">Bookings</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
    </nav>
    
  )
}
