import React from 'react';
import './NavBar.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      {/* <Nav>
        <Navbar className='navigation-bar navbar navbar-expand-md'>
          <Navbar.Brand href='/' className='navigation-text navbar-title'>
            Melty Connect
          </Navbar.Brand>
          <Nav.Link
            as={NavLink}
            to='/home'
            className='navigation-text navbar-link'
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to='/login'
            className='navigation-text navbar-link'
          >
            Account
          </Nav.Link>
        </Navbar>
      </Nav> */}

      <Navbar className='navigation-bar font-family' variant='dark' expand='lg'>
        <Nav className='nav-brand'>
          <Navbar.Brand href='/' className='nav-brand'>
            Melty Connect
          </Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='dropdown'>
          <Nav className='ml-auto'>
            <Nav.Link href='/home' className='navigation-text'>
              Home
            </Nav.Link>
            <Nav.Link href='/login' className='navigation-text'>
              Account
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
