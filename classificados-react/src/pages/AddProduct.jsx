import Container from "react-bootstrap/esm/Container";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";

function AddProduct() {

    let navigate = useNavigate();
    const {id} = useParams();

    const [product, setProduct] = useState({
        nome: "",
        preco: "",
        qtd: "",
        categoria: [],
        file: []
    });

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        loadCategorias();
    }, []);

    const loadCategorias = async () => {
        const result = await axios.get("http://localhost:8080/categorias")
        setCategorias(result.data);
    }

    const { nome, preco, qtd } = product;

    const onInputChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleCategory = (e) => {
        setProduct({
            ...product, categoria: {
                id: e.target.value,
                nome: e.target.options[e.target.selectedIndex].text
            }
        })
    }

    const sendForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/produtos/", product)
        navigate("/produtos");
    };

    return (        
    <Container className="text-center">
        <h1>Adicionando produto: {id}</h1>

        <form onSubmit={(e) => sendForm(e)}>

            <label htmlFor="nome">Nome do produto:</label>
            <br />
            <input
            type="text"
            name="nome"
            placeholder="Produto"
            value={nome}
            onChange={(e) => onInputChange(e)}
            />

            <br />
            <br />

            <label htmlFor="preco">Preço do produto:</label>
            <br />
            <input
            type="number"
            name="preco"
            placeholder="R$"
            value={preco}
            onChange={(e) => onInputChange(e)}
            />

            <br />
            <br />

            <label htmlFor="qtd">Quantidade do produto:</label>
            <br />
            <input
            type="number"
            name="qtd"
            placeholder="Quantidade"
            value={qtd}
            onChange={(e) => onInputChange(e)}
            />
            
            <br />
            <br />

            <label htmlFor='categoria'>Categoria</label>
            <br />
            <select onChange={(e) => handleCategory(e)} name='categoria'>
                <option hidden>Selecione uma categoria</option>
                {categorias.map((categoria) => (
                    <option value={categoria.id} key={categoria.id}>{categoria.nome}</option>
                    ))
                }
            </select>
            <br />
            <br />
            <br />

            <Button type="submit" variant="primary">Adicionar produto</Button>

            <br />
            <br />

            <Link to="/produtos">
                <Button variant="danger">Cancelar</Button>
            </Link>

        </form>
    </Container>
    )

}

export default AddProduct;