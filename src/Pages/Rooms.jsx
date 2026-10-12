import { Link } from "react-router-dom";

function Rooms() {
  return (
    <section className="page">
      <h1>Our Rooms</h1>

      <div className="rooms-container">
        <div className="room-card">
          <h2>Single Room</h2>
          <p>Comfortable room for one guest.</p>
          <h3>₹1500 / night</h3>

          <Link to="/book-room" className="button">
            Book Now
          </Link>
        </div>

        <div className="room-card">
          <h2>Deluxe Room</h2>
          <p>Spacious room with extra comfort.</p>
          <h3>₹2500 / night</h3>

          <Link to="/book-room" className="button">
            Book Now
          </Link>
        </div>

        <div className="room-card">
          <h2>Family Room</h2>
          <p>Comfortable room for families.</p>
          <h3>₹4000 / night</h3>

          <Link to="/book-room" className="button">
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Rooms;