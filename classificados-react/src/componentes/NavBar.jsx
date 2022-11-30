import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Products from '../pages/Products';
import NoPage from '../pages/NoPage';

function CustomNavbar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/" className='text-light navlink rounded-pill'>Home</Link>
            <Link to="/produtos" className='text-light navlink rounded-pill'>Todos os produtos</Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default CustomNavbar;