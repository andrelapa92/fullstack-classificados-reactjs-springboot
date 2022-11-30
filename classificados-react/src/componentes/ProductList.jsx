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

    <Container className="text-center">
      {product?.map((p) => (
        <ProductCard
        key={p.id}
        price={p.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
        title={p.nome}
        category={p.categoria.nome}
        />
      ))}
    </Container>

  );

}

export default ShowProducts;
