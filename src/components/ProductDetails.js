import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const api_link = "https://fakestoreapi.com/products";
    const params = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`${api_link}/${params.productId}`)
            .then((resp) => resp.json())
            .then((resp) => setProduct(resp))
    }, [])
    return (<>
        <img src={product.image} alt={product.title} />    
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        </>)
}

export default ProductDetails;