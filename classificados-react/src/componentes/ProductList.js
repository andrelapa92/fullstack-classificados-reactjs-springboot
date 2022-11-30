import React, { useEffect, useState } from "react";
import api from "../services/api";
import Container from 'react-bootstrap/Container';
import ProductCard from "./ProductCard";

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

    <Container>
      {product?.map((p) => (
        <ProductCard
        key={p.id}
        price={"R$" + p.preco}
        title={p.nome}
        />
      ))}
    </Container>

  );

}

export default ShowProducts;
