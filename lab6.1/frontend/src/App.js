import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import User from "./page/user";

function App (){

  const router = createBrowserRouter([
    {
      path: "/",
      element: <User/>
    },
    
  ]);

  return <RouterProvider router={router} />
}
export default App;
