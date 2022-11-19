import React from "react";
import {Routes, Route} from "react-router-dom"
import AdminPages from "../pages/AdminPages";
import ContactPages from "../pages/ContactPages";
import ErrorPages from "../pages/ErrorPages";
import HomePages from "../pages/HomePages";
import ProductListPages from "../pages/ProductListPages";
import ProductsPages from "../pages/ProductsPages";


function Pages ()  {
    return(
    <Routes>
        <Route path="/start" element={<HomePages/>}/>
        <Route path="/contact" element={<ContactPages/>}/>
        <Route path="/products" element={<ProductListPages/>}/>
        <Route path="/product/:id" element={<ProductsPages/>}/>
        <Route path="/admin" element={<AdminPages/>}/>
        <Route path="*" element={<ErrorPages/>}/>
    </Routes>
    );
}

export default Pages