import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home.js';
import Products from '../pages/Products';
import NoPage from '../pages/NoPage';

function CustomNavbar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/produtos">Produtos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
      
      <BrowserRouter>
          <Routes>
              <Route index element={<Home />} />
              <Route path="produtos" element={<Products />} />
              <Route path="*" element={<NoPage />} />
          </Routes>
      </BrowserRouter>

      <Outlet />
      <br />
    </>
  );
}

export default CustomNavbar;