import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContextProvider";
import { Table, Container } from "react-bootstrap";

const MyReservations = () => {
  const { token } = useContext(UserContext);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/reservation/my-reservations", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setReservations(data);
        } else {
          alert("Failed to fetch reservations");
        }
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, [token]);

  return (
    <Container>
      <h2>My Reservations</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation._id}>
              <td>{reservation.date}</td>
              <td>{reservation.time}</td>
              <td>{reservation.guests}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MyReservations;