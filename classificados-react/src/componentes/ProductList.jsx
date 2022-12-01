import React, { useEffect, useState } from "react";
import api from "../services/api";
import Container from 'react-bootstrap/Container';
import ProductCard from "./ProductCard";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ShowProducts() {

  const [product, setProduct] = useState();

  useEffect(() => {
    api
      .get("/produtos")
      .then((response) => setProduct(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  
  return (

    <Container className="text-center">
      {product?.map((p) => (
        <ProductCard
        key={p.id}
        price={p.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
        title={p.nome}
        category={p.categoria.nome}
        />
      ))}
      <div>
        <Card className='addProduct productCard d-inline-block text-center'>
          <Card.Body>
            <Button variant="primary">Adicionar Produto</Button>
          </Card.Body>
        </Card>
      </div>
    </Container>

  );

}

export default ShowProducts;
