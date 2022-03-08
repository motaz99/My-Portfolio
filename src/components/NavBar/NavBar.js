import React from 'react'
import logo from '../../img/attackLogo.png'
import { NavLink } from 'react-router-dom'
import {Navbar, Container,Nav} from 'react-bootstrap'


const NavBar = () => {
  return (
    <>
      <Navbar bg="black" expand="lg" variant='dark' >
     <Container className='container-xxl '>
     <Navbar.Brand className='navbar-brand ' as={NavLink} to={"/"}><img height={'60px'} width={'60px'}  src={logo} alt='logo' /></Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav " />
     <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto fw-bold navbar-collapse justify-content-end align-center">
        <Nav.Link as={NavLink}  to={"/"}>HOME</Nav.Link>
        <Nav.Link as={NavLink}  to={"/projects"}>PROJECTS</Nav.Link>
        <Nav.Link as={NavLink}  to={"/contact"}>CONTACT</Nav.Link>
        <Nav.Link as={NavLink}  to={"/skills"}>SKILLS</Nav.Link>
        <Nav.Link as={NavLink}  to={"/resume"}>RESUME</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default NavBar