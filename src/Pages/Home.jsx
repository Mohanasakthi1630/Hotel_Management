
import React from "react";
import { Link } from "react-router-dom";
import Amenities from "../Components/Amenities";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to StayEase Hotel</h1>
          <p>
            Experience comfort, relaxing rooms and friendly
            hospitality for a memorable stay.
          </p>

          <Link to="/rooms" className="btn">
            Explore Rooms
          </Link>
        </div>
      </section>

      <section className="section welcome">
        <h2>Your Comfort Is Our Priority</h2>
        <p>
          Whether you are travelling for business or leisure,
          StayEase offers a comfortable place to relax and enjoy
          your stay.
        </p>
        <Link to="/about" className="text-link">
          Learn More About Us
        </Link>
      </section>

     
    </>
  );
}
