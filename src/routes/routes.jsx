import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";

import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import AddTask from "../pages/AddTask/AddTask";
import BrowseTask from "../pages/BrowseTask/BrowseTask";
import PostedTask from "../pages/PostedTasks/PostedTask";
import PrivateRoute from "../private/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-tasks",
        element: (
          <PrivateRoute>
            <AddTask />
          </PrivateRoute>
        ),
      },
      {
        path: "/browse-tasks",
        element: (
          <PrivateRoute>
            <BrowseTask />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-posted-tasks",
        element: (
          <PrivateRoute>
            <PostedTask />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
