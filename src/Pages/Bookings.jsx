
import { useSelector, useDispatch } from "react-redux";
import { cancelBooking } from "../Redux/bookingSlice";

export default function Bookings() {
  const bookings = useSelector((state) => state.bookings);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>My Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings available.</p>
      ) : (
        bookings.map((booking) => (
          <div className="card" key={booking.id}>
            <h3>{booking.room}</h3>

            <p>Name: {booking.name}</p>
            <p>Email: {booking.email}</p>
            <p>Check-in Date: {booking.date}</p>

            <button
              onClick={() => dispatch(cancelBooking(booking.id))}
            >
              Cancel Booking
            </button>
          </div>
        ))
      )}
    </div>
  );
}
