import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';

function TopBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg"
          alt="Logo"
          style={{ height: "30px", marginLeft: '12px' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="d-flex">
        
        <InputGroup className="flex-grow-1 mr-auto">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 flex-grow-1"
          />
          
          <Button variant="outline-success">Search</Button>
          
        </InputGroup>
        
        <Nav>
  <Nav.Link href="#LogIn" style={{ minWidth: '100px' }}>Log In</Nav.Link>
  <Button variant="success" style={{ minWidth: '100px', marginLeft: '8px', marginRight: '12px' }}>Sign Up</Button>
</Nav>

        
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopBar;
