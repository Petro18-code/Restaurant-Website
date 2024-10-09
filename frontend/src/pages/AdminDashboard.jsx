import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContextProvider";
import { Table, Button, Container } from "react-bootstrap";

const AdminDashboard = () => {
  const { token, user } = useContext(UserContext);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    if (user && user.isAdmin) {
      const fetchReservations = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/admin/all-reservations", {
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
    }
  }, [token, user]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/delete-reservation/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setReservations(reservations.filter((reservation) => reservation._id !== id));
        alert("Reservation deleted successfully");
      } else {
        alert("Failed to delete reservation");
      }
    } catch (error) {
      console.error("Error deleting reservation:", error);
    }
  };

  return (
    <Container fluid className="bg-dark text-light p-4 min-vh-100">
      <h2 className="d-flex justify-content-center mb-4 p__cormorant">Admin Dashboard</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation._id}>
              <td>{reservation.name}</td>
              <td>{reservation.email}</td>
              <td>{reservation.date}</td>
              <td>{reservation.time}</td>
              <td>{reservation.guests}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(reservation._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminDashboard;