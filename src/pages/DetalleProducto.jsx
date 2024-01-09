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
    <article className=" flex flex-col justify-center items-center max-w-[500px] border border-black rounded-xl gap-4">
      <img className=" h-64 w-full" src={product.thumbnail} alt="" />
      <h1 className=" font-bold text-xl">{product.title}</h1>
      <div className=" flex gap-5">
        <p className=" font-medium">${product.price}</p>
        <div className=" flex items-center gap-1">
          <img
            className=" w-4"
            src="https://svgsilh.com/svg/775819.svg"
            alt=""
          />
          <p className=" font-medium">{product.rating}</p>
        </div>
        <p className=" font-medium">Disponibles: {product.stock}</p>
      </div>
      <div className=" flex gap-5">
        <p className=" font-medium">Marca: {product.brand}</p>
        <p className=" font-medium">Categoría: {product.category}</p>
      </div>
      <p className=" px-4 mb-3">{product.description}</p>
    </article>
  );
}
