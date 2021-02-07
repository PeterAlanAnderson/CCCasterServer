import React from 'react';
import './NavBar.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <div>
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
