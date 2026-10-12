import React from 'react'
import { Link } from 'react-router-dom';


export default function Rooms() {

    const rooms =[
        {id: 1 , name :"Single Room", price : 1500},
        {id: 2 , name :"Double Room", price : 2500},
        {id: 2 , name :"Delux Room", price : 4000}
    ];
  return (
    <div className='container'>
        <h1>Available Rooms</h1>

        {rooms.map((room)=>(
            <div className='card' key={room.id}>
                <h3>{room.name}</h3>
                <p>Price per night : {room.price}</p>

                <Link to={`/book?room=${room.id}`}>
                  <button>Book Now</button>
                </Link>
            </div>
        ))}
      
    </div>
  );
}
