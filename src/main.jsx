import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
  ],
  { basename: "/phb-sc" },
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="flex flex-col">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
);
