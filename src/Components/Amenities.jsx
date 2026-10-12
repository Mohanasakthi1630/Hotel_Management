
import React from "react";

const amenities = [
  {
    icon: "📶",
    title: "Free Wi-Fi",
    description: "Stay connected throughout your stay.",
    details: [
      "High-speed internet access",
      "Available in guest rooms",
      "Suitable for work and entertainment"
    ]
  },
  {
    icon: "🏊",
    title: "Swimming Pool",
    description: "Relax and refresh during your stay.",
    details: [
      "Swimming facilities",
      "Relaxation area",
      "Convenient pool timings"
    ]
  },
  {
    icon: "🍽️",
    title: "Restaurant",
    description: "Enjoy delicious meals and dining.",
    details: [
      "Breakfast, lunch and dinner",
      "Vegetarian food options",
      "Comfortable dining area"
    ]
  },
  {
    icon: "💪",
    title: "Fitness Center",
    description: "Maintain your fitness routine.",
    details: [
      "Cardio exercise equipment",
      "Strength training equipment",
      "Workout space"
    ]
  },
  {
    icon: "🚗",
    title: "Parking",
    description: "Convenient parking for your vehicle.",
    details: [
      "Guest parking facilities",
      "Easy vehicle access",
      "Convenient arrival and departure"
    ]
  },
  {
    icon: "🛎️",
    title: "Room Service",
    description: "Enjoy convenient service in your room.",
    details: [
      "Food and beverage orders",
      "Housekeeping assistance",
      "Guest support"
    ]
  }
];

export default function Amenities() {
  return (
    <section className="amenities section">
      <h2>Our Amenities</h2>
      <p className="section-intro">
        Enjoy comfort, convenience and excellent hospitality.
      </p>

      <div className="amenities-container">
        {amenities.map((amenity) => (
          <div className="amenity-card" key={amenity.title}>
            <div className="amenity-icon">{amenity.icon}</div>
            <h3>{amenity.title}</h3>
            <p>{amenity.description}</p>

            <ul>
              {amenity.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
