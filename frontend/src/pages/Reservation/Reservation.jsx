import React, { useState, useContext } from "react";
import { UserContext } from "../../context/UserContextProvider";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import './Reservation.css'

const Reservation = () => {
  const { token, user } = useContext(UserContext);
  const navigate = useNavigate();

  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          email,
          date,
          time,
          guests,
        }),
      });

      if (response.ok) {
        alert("Reservation created successfully");
        setName(user ? user.name : "");
        setEmail(user ? user.email : "");
        setDate("");
        setTime("");
        setGuests(1);
        navigate("/");
      } else {
        alert("Failed to create reservation");
      }
    } catch (error) {
      console.error("Error creating reservation:", error);
      alert("An error occurred while booking your table.");
    }
  };

  return (
    <Container fluid className="bg-black min-vh-100">
      <h2 className="p__cormorant text-center pt-4 ">Book a Table</h2>
      <Form
        onSubmit={handleSubmit}
        className="text-white text-center d-flex flex-column justify-content-center align-items-center"
      >
        <Form.Group className="mb-3 w-50">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="bg-golden"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="bg-golden"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Date</Form.Label>
          <Form.Control
            className="bg-golden"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Time</Form.Label>
          <Form.Control
            className="bg-golden"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 w-50">
          <Form.Label>Number of Guests</Form.Label>
          <Form.Control
            className="bg-golden"
            type="number"
            min={1}
            max={10}
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />
        </Form.Group>
        <Button className="custom__button" type="submit">
          Book Now
        </Button>
      </Form>
    </Container>
  );
};

export default Reservation;
