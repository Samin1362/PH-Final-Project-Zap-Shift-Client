import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      }, 
      {
        path: "/coverage", 
        Component: Coverage, 
        loader: () => fetch("/public/serviceCenters.json").then(res => res.json()),
      }
    ]
  },
  {
    path: "/",
    Component: AuthLayout, 
    children: [
      {
        path: '/login', 
        Component: Login
      }, 
      {
        path: "/rider",
        element: <PrivateRoute><Rider></Rider></PrivateRoute>
      },
      {
        path: '/register', 
        Component: Register
      }
    ]
  }
]);

export default router;
