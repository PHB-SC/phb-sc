import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GalleryDetail, Home } from "./pages";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/gallery/:id",
      element: <GalleryDetail />,
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
