import React from "react";
import ProductsPages from "../pages/ProductsPages";

function Pages(props) {
    return(
        <article className="product">
            <h1>{props.id}</h1>
        </article>
    )
}

export default Pages