import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import BookingPage from "./pages/bookingPage/BookingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:hotelID" element={<Detail />} />
        <Route path="/booking/:hotelID" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
