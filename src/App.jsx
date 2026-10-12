import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Rooms from "./Pages/Rooms";
import Amenities from "./Components/Amenities";
import Bookings from "./Pages/Bookings";
import BookRoom from "./Pages/BookRoom";
import Contact from "./Pages/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/book-room" element={<BookRoom />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;