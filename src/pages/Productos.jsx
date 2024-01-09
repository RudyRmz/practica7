import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Productos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <div className=" flex flex-col items-center">
      <h1 className=" text-5xl font-bold">Productos</h1>
      <section className=" flex flex-wrap gap-4 justify-center mt-6">
        {products.map((product) => {
          return (
            <article
              key={`prod-${product.id}`}
              className=" border border-black max-w-60 max-h-96 rounded-lg"
            >
              <img className=" w-full h-2/5" src={product.thumbnail} alt="" />
              <div className=" flex flex-col items-center gap-2">
                <h3 className=" font-bold">{product.title}</h3>
                <p className=" px-2 line-clamp-3">{product.description}</p>
                <p className=" font-medium">$ {product.price}</p>
                <Link
                  className=" px-2 py-1 bg-black text-xl text-white font-semibold rounded-lg hover:opacity-80"
                  to={`/productos/${product.id}`}
                >
                  Ver producto
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
