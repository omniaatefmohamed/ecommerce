import { useEffect, useState } from "react";
import Product from "./Product";
import './../css/products.css'

function Products() {
    const Products_List = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(Products_List)
            .then((resp) => resp.json())
            .then((resp) => setProducts(resp))
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <h2 className="text-center my-5">Our Products</h2>
                    {products.map((product) => {
                        return (
                            <div className="col-3" key={product.id}>
                                <Product product={product}/>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default Products;