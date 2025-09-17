import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskList from "./TaskList";
import TaskDetail from "./TaskDetail";

export default function Bai3() {
  const routers = createBrowserRouter([
    {
      path: "/tasklist",
      element: <TaskList></TaskList>
    },
    {
        path: "/tasklist/:id",
        element: <TaskDetail></TaskDetail>
    }
  ]);

  return <RouterProvider router={routers}></RouterProvider>;
}