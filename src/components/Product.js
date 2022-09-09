import { Link } from "react-router-dom";

function Product(props) {
    const {product} = props;
    function textLimit(elements, maxTextLength) {
        for (var i = 0; i < elements.length; i++) {
          if (elements[i].innerHTML.length > maxTextLength)
            elements[i].innerHTML =
              elements[i].innerHTML.slice(0, maxTextLength) + "...";
        }
      }
      
      textLimit(document.getElementsByClassName("paragraph-count"), 10);
    return (
        <>
            <div className="card">
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text paragraph-count">{product.description}</p>
                    <Link className="btn btn-primary" to={`/product/${product.id}`}>More Details</Link>
                </div>
            </div>
        </>
    )
}

export default Product;