import React from 'react'
import axios from "axios";
import { useState } from 'react'
import  {useNavigate, Link, useParams} from "react-router-dom";
import { useEffect } from 'react';
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";


export default function EditProduct () {
  

let navigate = useNavigate();

const {id} =useParams();

const [product,setProduct]=useState({
        
    nome: "",
    preco: "",
    qtd: "",
    categoria: "",
});



const{nome,preco,qtd} = product;

const [categorias, setCategorias] = useState([]);






const handleCategory = (e) => {
    setProduct ({...product, categoria: {

        id: e.target.value,
        nome: e.target.options[e.target.selectedIndex].text
    }
    
    })
} 

const loadCategorias=async() => {
    const result = await axios.get("http://localhost:8080/categorias")
    setCategorias(result.data);


}

const onInputChange=(e)=>{
    setProduct({...product, [e.target.name]: e.target.value});

};

const loadProducts =async() => {

  const result= await axios.get(`http://localhost:8080/produtos/${id}`)
  setProduct(result.data);
  console.log(result.data);


}

useEffect(()=>{

    loadProducts();
    loadCategorias();
}, []);


const onSubmit= async (e)=> {
    e.preventDefault();
     await axios.put(`http://localhost:8080/produtos/${id}`, product)
     navigate("/produtos");
};




  return (
    <Container className="text-center">
      <h1>Editando produto: {id}</h1>

      <form onSubmit={(e) => onSubmit(e)}>

        <label htmlFor="nameProduct">Nome do produto:</label>
        <br />
        <input
        type="text"
        name="nameProduct"
        placeholder="Produto"
        value={nome}
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
        value={preco}
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
        value={qtd}
        onChange={(e) => onInputChange(e)}
        />

        <br />
        <br />

        <label htmlFor="categoryProduct">Categoria:</label>
        <br />
        <select onChange={(e) => handleCategory(e)} name="categoryProduct">
          <option hidden>{product.categoria.nome}</option>
          {categorias?.map((categoria) =>(
            <option value={categoria.id} key={categoria.id}>{categoria.nome}</option>
            ))
          }
        </select>

        <br />
        <br />
        <br />

        <Button type="submit" variant="primary">Confirmar alterações</Button>
        <br />
        <br />
        <Link to='/produtos'>
          <Button variant="danger">Cancelar</Button>
        </Link>

      </form>
    </Container>
  );
}