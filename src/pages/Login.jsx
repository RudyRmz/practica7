import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const nagivate = useNavigate();
  return (
    <div className=" flex flex-col items-center gap-4">
      <h1 className=" font-bold mt-5 text-[50px]">Login</h1>
      <img
        className=" max-w-60"
        src="https://www.svgrepo.com/show/8646/login.svg"
        alt=""
      />
      <Link to={"/"}>Ingresar</Link>
      <Link to={"/productos"}>Productos</Link>
      <button
        onClick={() => {
          nagivate("/");
        }}
        className=" p-2 bg-black text-white rounded-lg hover:opacity-80"
      >
        Ingresar
      </button>
    </div>
  );
}
