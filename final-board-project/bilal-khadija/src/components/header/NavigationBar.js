import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavigationBar( { currentUser, setCurrentUser } ) {

  function handleLogOut(e){
    e.preventDefault();
    setCurrentUser('');
  }

  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home" className='navBarLogo'>Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='navBar'>
        <Nav className="mr-auto">
          <Nav.Link><Link to='/'>Home</Link></Nav.Link>
          {currentUser !== '' && <Nav.Link><Link to='/projects'> Projects </Link></Nav.Link>}
          {currentUser.occupation === 'manager' && <Nav.Link><Link to='/add-project'> Add project </Link></Nav.Link>}
          <Nav.Link><Link to='/about'>About us</Link></Nav.Link>
        </Nav>
        <Nav >
          {currentUser === '' && <Nav.Link><Link to='/login'>Login</Link></Nav.Link>}
          {currentUser === '' && <Nav.Link><Link to='/sign-up'>Sign Up</Link></Nav.Link>}
          {
            currentUser !== '' && 
            (
              <NavDropdown title={currentUser.username} id="basic-nav-dropdown" >
                <NavDropdown.Item><Link to={currentUser.username}>Edit Profile</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogOut}>Logout</NavDropdown.Item>
              </NavDropdown>
            )
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
  )
}

export default NavigationBar;
