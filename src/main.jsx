import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import SobreNosotros from "./pages/SobreNosotros.jsx";
import Contacto from "./pages/Contacto.jsx";
import Productos from "./pages/Productos.jsx";
import DetalleProducto from "./pages/DetalleProducto.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "sobre-nosotros",
        element: <SobreNosotros />,
      },
      {
        path: "contacto",
        element: <Contacto />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/productos",
    element: <Productos />,
  },
  {
    path: "/productos/:id",
    element: <DetalleProducto />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
