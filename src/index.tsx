import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"
import App from "./App";
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
    >
      <Route
        path="home"
        element={<h1>Home</h1>}
      
      />
      <Route
        path="form"
        element={<h1>Login</h1>}
      
      />
    </Route>
  )
)

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);