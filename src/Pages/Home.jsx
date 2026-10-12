import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='container'>
        <h1>Welcome to our Hotel</h1>
        <p>Find a comfortable room for your next stay.</p>

        <Link to="/rooms">
        <button>View Rooms</button>
        </Link>
    </div>
  );
}
