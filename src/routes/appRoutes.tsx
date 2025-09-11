import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./protectedRoute";
import ThreadDetail from "../pages/ThreadDetail";
import MyProfile from "../pages/MyProfile";

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
          {
            path: "/detail-thread/:id",
            element: <ThreadDetail />,
          },
          {
            path: "/my-profile",
            element: <MyProfile />,
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
