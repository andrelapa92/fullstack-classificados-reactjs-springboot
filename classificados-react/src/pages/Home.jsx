import Container from "react-bootstrap/esm/Container";
import React, { useEffect, useState } from "react";
import api from "../services/api";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Outlet, Link } from "react-router-dom";

const Home = () => {

  const [category, setCategory] = useState();

  useEffect(() => {
    api
      .get("/categorias")
      .then((response) => setCategory(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  function getImg(categoryID) {
    switch (categoryID) {
      case 1:
        return "./img/moda.jpg"
      case 2:
        return "./img/eletronicos.jpg"
      case 3:
        return "./img/veiculos.jpg"
      default:
        return "./img/todas.jpg"
      }
  }

    return (

        <Container className="text-center">
          {category?.map((c) => (
            <Card className='d-inline-block categoryCard'
                key = { c.id }>
                <Card.Img variant='top'
                  className="cardImg"
                  alt='img'
                  src={getImg(c.id)}
                />
                <Card.Body>
                    <Card.Title>{c.nome}</Card.Title>
                </Card.Body>
            </Card>
            ))
          }
          <Card className='d-inline-block categoryCard'>
            <Card.Img variant='top'
              className="cardImg"
              alt='img'
              src="./img/todas.jpg"
            />
            <Card.Body>
                <Card.Title>Todos os produtos</Card.Title>
                <Link to="/produtos">
                  <Button variant='primary'>Ver todos os produtos</Button>
                </Link>
            </Card.Body>
          </Card>

          <Outlet />

        </Container>
  
    );
  };
  
  export default Home;