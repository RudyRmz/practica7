import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function DetalleProducto() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <div>
      <h1>Detalle del producto</h1>
      <img src={product.thumbnail} alt="" />
      <p>id: {id}</p>
    </div>
  );
}
