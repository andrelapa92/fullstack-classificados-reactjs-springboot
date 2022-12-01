import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Products from './pages/Products';
import ProductByCategory from './componentes/ProductByCategory';
import React, { useEffect, useState } from "react";
import api from "./services/api";

function App() {
  
  const [category, setCategory] = useState();
  const [products, setProducts] = useState();

  useEffect(() => {
    api
      .get("/categorias")
      .then((response) => setCategory(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  useEffect(() => {
    api
      .get("/produtos")
      .then((response) => setProducts(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="produtos" element={<Products />} />
          {category?.map((c) =>
          <Route path={"produtos/" + c.id} key={c.id} element={<ProductByCategory />} />
          )
          }
          <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
