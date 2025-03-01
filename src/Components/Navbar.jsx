import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/">Boutique</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? 'nav-link active fw-bold text-decoration-underline' : 'nav-link'
              }
            >
              Accueil
            </NavLink>

           
          
         
            <NavLink 
              to="/myevents" 
              className={({ isActive }) => 
                isActive ? 'nav-link active fw-bold text-decoration-underline' : 'nav-link'
              }
            >
              MyEvents
            </NavLink>

            <NavLink 
              to="/events" 
              className={({ isActive }) => 
                isActive ? 'nav-link active fw-bold text-decoration-underline' : 'nav-link'
              }
            >
              Events
            </NavLink>
            <NavLink 
              to="/events/add" 
              className={({ isActive }) => 
                isActive ? 'nav-link active fw-bold text-decoration-underline' : 'nav-link'
              }
            >
              Add Events
            </NavLink>
          
            <NavLink 
              to="/updateEvent" 
              className={({ isActive }) => 
                isActive ? 'nav-link active fw-bold text-decoration-underline' : 'nav-link'
              }
            >
              update Events
            </NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
