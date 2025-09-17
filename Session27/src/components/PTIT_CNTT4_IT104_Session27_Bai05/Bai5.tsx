import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Blog from './Blog';
import Post from './Post';
import PostDetail from './PostDetail';

export default function Bai5() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/blog/posts"/>,
    },
    {
      path: "/blog",
      element: <Blog></Blog>,
      children: [
        { 
            path: "posts", 
            element: <Post></Post> 
        },
        { 
            path: "posts/:id", 
            element: <PostDetail></PostDetail>
        },
      ]
    },
    {
      path: "*",
      element: <p>404 Not Found</p>
    }
  ]);

  return (
          <>
            <RouterProvider router = {routers}></RouterProvider>;
          </>
      )
}