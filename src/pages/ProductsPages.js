import React from "react"
import {Link} from "react-router-dom"
import Product from "../components/Product"
import {useParams} from "react-router-dom"

function ProductsPages () {
    const {id} = useParams()
    return(
        <>
        <div>Strona produktu</div>
        <Product id={id}/>
        <Link to="/products">Powrót</Link>
        </>
    );
}


export default ProductsPages