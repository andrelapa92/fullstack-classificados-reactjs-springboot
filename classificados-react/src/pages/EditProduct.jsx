import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import { useNavigate, Link, useParams } from "react-router-dom";
import ProductService from "../services/ProductService";
import CategoryService from "../services/CategoryService";

function EditProduct() {

  const { id } = useParams();

  const [category, setCategory] = useState([]);

  const [product, setProduct] = useState({
    nameProduct: "",
    priceProduct: "",
    quatityProduct: ""
  })

  const { nameProduct, priceProduct, quantityProduct } = product;

  const loadCategorias = async () => {
    const resultado = await CategoryService.getAll();
    setCategory(resultado.data);
  }

  const loadProduto = async () => {
    const resultado = await ProductService.get(id);
    setProduct(resultado.data)
  }

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
};

  let navigate = useNavigate();

  const sendForm = async (e) => {
    e.preventDefault();
    await ProductService.update(id, product);
    navigate("/");
  }

    useEffect(() => {
      loadProduto();
      loadCategorias();
  }, [])

  return (
    <Container className="text-center">
      <h1>Editando produto: {id}</h1>

      <form onSubmit={(e) => sendForm(e)}>

        <label htmlFor="nameProduct">Nome do produto:</label>
        <br />
        <input
        type="text"
        name="nameProduct"
        placeholder="Produto"
        value={nameProduct}
        onChange={(e) => onInputChange(e)}
        />

        <br />
        <br />

        <label htmlFor="priceProduct">Preço do produto:</label>
        <br />
        <input
        type="number"
        name="priceProduct"
        placeholder="R$"
        value={priceProduct}
        onChange={(e) => onInputChange(e)}
        />

        <br />
        <br />

        <label htmlFor="quantityProduct">Quantidade do produto:</label>
        <br />
        <input
        type="number"
        name="quantityProduct"
        placeholder="Quantidade"
        value={quantityProduct}
        onChange={(e) => onInputChange(e)}
        />

        <br />
        <br />

        <Button type="submit" variant="primary">Confirmar alterações</Button>

      </form>
    </Container>
  );
}
  
export default EditProduct;