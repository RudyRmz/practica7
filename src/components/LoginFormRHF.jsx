import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function LoginFormRHF() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  async function onSubmit(data) {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const responseData = await response.json();

    if (responseData?.token) {
      localStorage.setItem("token", responseData.token);
      navigate("/productos");
    } else {
      setError("root", { message: "Datos invalidos" });
    }
  }

  const handleClearClick = () => {
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" border border-black flex flex-col gap-3 p-10 rounded-xl"
    >
      <label>
        Username:
        <input
          className={` border border-black ${
            errors.username && "border-red-500"
          }`}
          type="text"
          {...register("username", {
            required: { value: true, message: "El usuario es requerido" },
            minLength: {
              value: 3,
              message: "El usuario debe tener 3 caracteres",
            },
            pattern: {
              value: /^[a-zA-Z0-9]+$/,
              message: "El usuario solo puede contener letras y numeros",
            },
          })}
        />
      </label>
      {errors.username && <p>{errors.username?.message}</p>}

      <label>
        Password:
        <input
          className=" border border-black"
          type={showPassword ? "text" : "password"}
          {...register("password", {
            required: true,
          })}
        />
      </label>
      {errors.password && <p>Password is required</p>}

      <span
        onClick={() => {
          setShowPassword(!showPassword);
        }}
      >
        {showPassword ? "Ocultar" : "Mostrar"} Password
      </span>
      <button
        className=" bg-black text-white px-2 py-1 rounded-lg"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Loading..." : "Login"}
      </button>
      <button
        className=" bg-black text-white px-2 py-1 rounded-lg"
        onClick={handleClearClick}
        type="reset"
      >
        Reset
      </button>

      {errors.root && <p className=" text-red-500">{errors.root?.message}</p>}
    </form>
  );
}
