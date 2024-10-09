import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { UserContext } from '../context/UserContextProvider.jsx';
import { login } from '../constants/fetch.js';
import { SpecialMenu } from '../container';
import { Container, Form, Modal, Button, Navbar } from 'react-bootstrap';
import { Home } from './Home.jsx';

const Login = props => {
  let [searchParams, setSearchParams]=useSearchParams()
  const {token, setToken} = useContext(UserContext)
  const [formValue, setFormValue] = useState({email: '', password: ''});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  useEffect(()=>{
    console.log(searchParams.get('token'))
    const tokenFromQuery = searchParams.get('token')
    if(tokenFromQuery){
      localStorage.setItem('token',tokenFromQuery)
      setToken(tokenFromQuery)
      navigate('/')
    }
  },[searchParams, setToken, navigate])

  const handleChange = (event) =>{
    setFormValue({
      ...formValue, 
      [event.target.name] : event.target.value
    })
  }

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
      alert(err + 'Error, try again later.');
    }
  };

  return (
    <Container fluid="sm">
      <h1 className="text-center mb-3">Il Giardino ai Fori</h1>
      {!token && <div><Button variant="primary" className="custom__button" as={Link} to={'/login'} onClick={handleShow}>
        Login
      </Button> or
      <Button variant="primary"className="ms-2" as={Link} to={'http://localhost:5000/api/auth/login-google'}>
        Login con Google
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
      </div>}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" onChange={handleChange} placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={handleChange} placeholder="your password" />
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
     {!show && <Button as={Link} to="/">Back to Home</Button>}
    </Container>
  );
};

export default Login;
