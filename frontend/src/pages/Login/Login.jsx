import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { UserContext } from '../../context/UserContextProvider.jsx';
import { login } from '../../constants/fetch.js';
import { Container, Form, Modal, Button, Navbar } from 'react-bootstrap';
import images from '../../constants/images.js';
import './Login.css';

const Login = (props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { token, setToken } = useContext(UserContext);
  const [formValue, setFormValue] = useState({ email: '', password: '' });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenFromQuery = searchParams.get('token');
    if (tokenFromQuery) {
      localStorage.setItem('token', tokenFromQuery);
      setToken(tokenFromQuery);
      navigate('/');
    }
  }, [searchParams, setToken, navigate]);

  const handleChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const tokenObj = await login(formValue);
      if (tokenObj && tokenObj.token) {
        localStorage.setItem('token', tokenObj.token);
        setToken(tokenObj.token);
        alert('Login successful');
        navigate('/');
      } else {
        alert('Invalid login credentials');
      }
    } catch (err) {
      alert(err + ' Error, try again later.');
    }
  };

  return (
    <Container fluid className="login-container bg-black min-vh-100">
      <div className="text-center">
        <img src={images.giardino} alt="logo" className="img-fluid logo" />
      </div>

      {!token && (
        <div className="text-center mt-4">
          <Button variant="primary" className="custom__button" onClick={handleShow}>
            Login
          </Button>
          <span className="text-white mx-2">or</span>
          <Button variant="primary" className="custom__button" as={Link} to="http://localhost:5000/api/auth/login-google">
            Login with Google
          </Button>
          <div className="mt-3">
            <Button
              variant="outline-secondary"
              className="custom__button mt-3"
              onClick={() => navigate('/register')}
            >
              Not Registered? Go to Register
            </Button>
          </div>
        </div>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="your password"
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Login now
          </Button>
        </Modal.Footer>
      </Modal>

      {!show && (
        <div className="text-center mt-4">
          <Button as={Link} to="/" className="custom__button">
            Back to Home
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Login;
