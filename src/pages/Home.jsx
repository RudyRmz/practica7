import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <nav className=" flex items-center w-full justify-between p-2 border-b-2 border-black">
        <div className=" flex items-center gap-5">
          <h1 className=" font-bold mt-5 text-[40px]">La Tiendita</h1>
          <img
            className=" max-w-[70px]"
            src="https://images.vexels.com/media/users/3/214981/isolated/preview/7b8e4754b7104c5612588d7970273f36-icono-de-trazo-de-tienda.png"
            alt=""
          />
        </div>

        <div className=" flex items-center gap-4">
          <Link to={"/sobre-nosotros"} className=" font-bold text-xl">
            Sobre nosotros
          </Link>
          <Link to={"/contacto"} className=" font-bold text-xl">
            Contacto
          </Link>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className=" p-2 bg-black text-xl text-white rounded-lg hover:opacity-80"
          >
            Iniciar sesion
          </button>
        </div>
      </nav>
      <div className=" flex flex-col items-center gap-4">
        <h1 className=" font-bold mt-5 text-[50px]">
          Bienvenido a La Tiendita
        </h1>
        <img
          className=" max-w-64"
          src="https://images.vexels.com/media/users/3/214981/isolated/preview/7b8e4754b7104c5612588d7970273f36-icono-de-trazo-de-tienda.png"
          alt=""
        />
        <button
          onClick={() => {
            navigate("/productos");
          }}
          className=" p-2 bg-black text-xl text-white rounded-lg hover:opacity-80"
        >
          Ver productos
        </button>
        <Outlet />
      </div>
    </>
  );
}
