import Container from "react-bootstrap/esm/Container";
import React, { useEffect, useState } from "react";
import api from "../services/api";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
        return console.log("Imagem não encontrada!")}
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
                    <Button variant='primary'>Ver produtos</Button>
                </Card.Body>
            </Card>
            ))
          }
          <Card className='d-inline-block categoryCard allProductsCard'>
                <Card.Body>
                    <Card.Title>Ver todos os produtos</Card.Title>
                    <Button variant='primary' className="large">Ver todos os produtos</Button>
                </Card.Body>
            </Card>
        </Container>
  
    );
  };
  
  export default Home;