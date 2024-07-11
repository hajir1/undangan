import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Majored from "./component/Majored.jsx";

const router = createBrowserRouter([
  {
    path: "/:nama",
    element: <Majored />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
