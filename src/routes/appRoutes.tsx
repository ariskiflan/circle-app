import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./protectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <RootLayouts />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
