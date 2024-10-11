import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import { Home } from "./pages/Home.jsx";
import Review from "./pages/Review/Review.jsx"
import Reservation from "./pages/Reservation/Reservation.jsx";
import ReviewSection from "./container/Review/ReviewSection.jsx";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard.jsx";
import Menu from "./pages/Menu/Menu.jsx";

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/review" element={<Review />} />
        <Route path="/reviews" element={<ReviewSection />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/admin" element={<AdminDashboard/>} />
        <Route path="/menu" element={<Menu/>}/>
      </Routes>
    </BrowserRouter>
);

export default App;
