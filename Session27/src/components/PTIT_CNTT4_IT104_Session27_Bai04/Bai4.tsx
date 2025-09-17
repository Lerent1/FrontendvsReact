import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import List from "./List";

export default function Bai4() {
  const routers = createBrowserRouter([
    {
      path: "/list",
      element: <List></List>
    },
  ]);

  return <RouterProvider router={routers}></RouterProvider>;
}