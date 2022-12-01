import React, { useEffect, useState } from "react";
import api from "../services/api";
import Container from "react-bootstrap/esm/Container";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";

function ProductByCategory() {

  const [product, setProduct] = useState();
  let { id } = useParams();

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
            category={id}
          />
        ))}
      </Container>
    );
  }
  
  export default ProductByCategory;
  