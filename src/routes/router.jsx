import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";

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
]);

export default router;
