import { createBrowserRouter } from "react-router";

import Home from "../pages/Home/Home";
import Layout from "../Layouts/Layout";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import AddTask from "../pages/AddTask/AddTask";
import BrowseTask from "../pages/BrowseTask/BrowseTask";
import PostedTask from "../pages/PostedTasks/PostedTask";
import PrivateRoute from "../private/PrivateRoute";
import TaskDetails from "../pages/BrowseTask/TaskDetails";

import BidsPage from "../pages/BidsPage/BidsPage";
import Error from "../components/Error";
import UpdateTask from "../pages/update/UpdateTask";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
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
        loader: async () => {
          const response = await fetch(
            "https://freelanzia-server.vercel.app/tasks"
          );
          if (!response.ok) {
            throw new Response("Failed to fetch tasks", {
              status: response.status,
            });
          }
          return response.json();
        },
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

      {
        path: "/details/:id",
        element: <TaskDetails />,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://freelanzia-server.vercel.app/tasks/${params.id}`
          );
          return res.json();
        },
      },

      {
        path: "/update/:id",
        element: <UpdateTask />,
        loader: async ({ params }) => {
          const res = await fetch(
            `https://freelanzia-server.vercel.app/tasks/${params.id}`
          );
          return res.json();
        },
      },

      {
        path: "/bids/:id",
        element: <BidsPage />,
      },
    ],
  },
]);
