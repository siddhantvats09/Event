import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';

const Navbox = () => {
  const nevigate=useNavigate()

  const click=()=>{
    nevigate("/")
  }
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand className='logo' onClick={click}>EVENT MANAGEMENT </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Offers</Nav.Link>
        <Nav.Link href="#features">Events</Nav.Link>
        <Nav.Link  className='readme'><Link to="/readme" className='links'>Click Here To know About Website [Readme File]</Link></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Navbox