import React, { use, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBooking } from '../Redux/bookingSlice';

export default function BookRoom() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [room , setRoom] = useState("Single Room")
    const [date , setDate] = useState("");

    function handleBooking(e){
        e.preventDefault();

        const booking = {
            id: Date.now(),
            name : name,
            email : email ,
            room : room,
            date : date
        };

        dispatch(addBooking(booking));

        alert("Room booked Successfully...!")
        navigate("/bookings");
    }
  return (
    <div className='container'>
        <h1>Book a Room</h1>

        <form action="" onSubmit={handleBooking}>
            <input type="text"
            placeholder='Enter your name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required />

            <input type="email"
            placeholder='enter your email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            required />

            <select value={room}
            onChange={(e)=>setRoom(e.target.value)}>
                <option value="">Single Room</option>
                <option value="">Double Room</option>
                <option value="">Delux Room</option>
            </select>

            <input type="date"
            value={date}
            onChange={(e)=>setDate(e.target.value)}
            required />

            <button type='submit'>Book Room</button>
        </form>
      
    </div>
  );
}
