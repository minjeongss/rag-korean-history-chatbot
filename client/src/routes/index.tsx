import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Communication from "../pages/Communication";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/step",
    element: <Communication />,
  },
]);
