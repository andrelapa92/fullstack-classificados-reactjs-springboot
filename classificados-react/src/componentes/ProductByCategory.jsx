import React, { useEffect, useState } from "react";
import api from "../services/api";
import Container from "react-bootstrap/esm/Container";
import ProductCard from "./ProductCard";

function ProductByCategory() {

  const [product, setProduct] = useState();

  useEffect(() => {
    api
      .get("/produtos/")
      .then((response) => setProduct(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

    return (
      <Container className="text-center">
        <ProductCard
          key={product.id}
          price={product.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
          title={product.nome}
          category={product.categoria.nome}
        />
      </Container>
    );
  }
  
  export default ProductByCategory;
  