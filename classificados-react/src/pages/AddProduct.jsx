import Container from "react-bootstrap/esm/Container";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate, Link, useParams } from "react-router-dom";
import ProductService from "../services/ProductService";
import CategoryService from "../services/CategoryService";
import ImgService from '../services/ImgService.js';

function AddProduct() {

    const { id } = useParams();

    const [file, setFile] = useState();

    function handleChange(e) {
        setFile(e.target.files[0]);
        handleSubmitFile();
    }

    const handleSubmitFile = async (e) => {
        e.preventDefault();
        ImgService.upload(file).then((data) => {
            setProduct({
                ...product, fileDB: {
                    id: data.id,
                    data: data.data,
                    name: data.name,
                    type: data.type,
                }
            })
          });
    };


    let navigate = useNavigate();

    const [product, setProduct] = useState({
        nomeProduto: "",
        precoProduto: "",
        quantidadeProduto: "",
        categoriaEntity: [],
        fileDB: []
    })


    const [category, setCategory] = useState([]);

    useEffect(() => {
        loadCategory();
    }, []);

    const loadCategory = async () => {
        const resultado = await CategoryService.getAll();
        setCategory(resultado.data);
    }

    const { nameProduct, priceProduct, quantityProduct } = product;

    const onInputChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleCategory = (e) => {
        setProduct({
            ...product, categoriaEntity: {
                id: e.target.value,
                nameProduct: e.target.options[e.target.selectedIndex].text
            }
        })
    }

    const sendForm = async (e) => {
        e.preventDefault();
        console.log(product);
        const registeredProduct = await ProductService.create(product);
        navigate("/");
    }

    return (        
    <Container className="text-center">
        <h1>Adicionando produto: {id}</h1>

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

            <Button type="submit" variant="primary">Adicionar produto</Button>

        </form>
    </Container>
    )

}

export default AddProduct;