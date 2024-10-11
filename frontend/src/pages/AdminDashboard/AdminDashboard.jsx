import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/UserContextProvider";
import { Table, Button, Container, Tabs, Tab } from "react-bootstrap";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const { token, user } = useContext(UserContext);
  const [reservations, setReservations] = useState([]);
  const [users, setUsers] = useState([]);

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

      const fetchUsers = async () => {
        try {
          const response = await fetch("http://localhost:5000/api/admin/all-users", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            setUsers(data);
          } else {
            alert("Failed to fetch users");
          }
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };

      fetchReservations();
      fetchUsers();
    }
  }, [token, user]);

  const handleDeleteReservation = async (id) => {
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
    <Container fluid className="admin__dashboard-container p-4 min-vh-100">
      <h2 className="admin__dashboard-header">Admin Dashboard</h2>
      
      <Tabs defaultActiveKey="reservations" id="admin-dashboard-tabs" className="mb-3">
        <Tab eventKey="reservations" title="Reservations">
          <Table striped bordered hover variant="dark">
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
                    <Button variant="danger" onClick={() => handleDeleteReservation(reservation._id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>

        <Tab eventKey="users" title="Users">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.isAdmin ? "Admin" : "User"}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default AdminDashboard;
