import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Products from './pages/Products';
import React, { useEffect, useState } from "react";
import api from "./services/api";
import EditProduct from './pages/EditProduct';
import AddProduct from './pages/AddProduct';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="produtos" element={<Products />} />
            <Route path={"produtos/:id"} element={<EditProduct />} />
            <Route path="produtos/novoproduto" element={<AddProduct />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
