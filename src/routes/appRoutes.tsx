import { createBrowserRouter } from "react-router-dom";
import RootLayouts from "../layouts/RootLayouts";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./protectedRoute";
import ThreadDetail from "../pages/ThreadDetail";
import MyProfile from "../pages/MyProfile";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Follows from "../pages/Follows";

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
          {
            path: "/profile/:id",
            element: <Profile />,
          },
          {
            path: "/search",
            element: <Search />,
          },
          {
            path: "/follows",
            element: <Follows />,
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
