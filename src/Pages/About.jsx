
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="page">
      <h1>About Our Hotel</h1>

      <p>
        StayEase is designed to provide guests with a comfortable,
        welcoming and convenient accommodation experience.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to make every stay pleasant through
        comfortable rooms, helpful service and convenient facilities.
      </p>

      <h2>Why Choose Us?</h2>
      <ul className="content-list">
        <li>Comfortable accommodation</li>
        <li>Convenient room booking</li>
        <li>Guest-friendly facilities</li>
        <li>Simple and reliable service</li>
      </ul>

      <Link to="/amenities" className="btn">
        Explore Amenities
      </Link>
    </section>
  );
}
