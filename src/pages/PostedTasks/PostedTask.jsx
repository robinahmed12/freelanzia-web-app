import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const PostedTask = () => {
  const [tasks, setTasks] = useState([]);
  // const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);
  const email = user?.email;

  const [isMobileView, setIsMobileView] = useState(false);

  // Check screen size on component mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  document.title = "Posted-tasks";

  fetch(
    `https://freelanzia-server.vercel.app/tasks?email=${encodeURIComponent(
      email
    )}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched tasks:", data);
      setTasks(data);
    })
    .catch(() => setTasks([]));

  const handleDelete = async (taskId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF6F00",
      cancelButtonColor: "#333333",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    const res = await fetch(
      `https://freelanzia-server.vercel.app/tasks/${taskId}`,
      {
        method: "DELETE",
      }
    );

    if (!res.ok) {
      console.error("Delete failed");
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Delete failed",
        confirmButtonColor: "#FF6F00",
      });
    }

    await Swal.fire({
      title: "Deleted!",
      text: "Your task has been deleted.",
      icon: "success",
      confirmButtonColor: "#FF6F00",
    });

    setTasks((prev) => prev.filter((task) => task._id !== taskId));
  };

  if (tasks.length === 0) {
    return (
      <div className="bg-primary rounded-lg mt-20 max-w-7xl mx-auto shadow-md p-8 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">
          My Posted Tasks
        </h2>
        <p className="text-secondary mb-6">No tasks posted yet.</p>
        <Link
          to="/add-tasks"
          className="btn-orange px-6 py-2 rounded-lg inline-block"
        >
          Post Your First Task
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-primary min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-primary rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-5 border-b border-primary">
            <h2 className="text-2xl font-bold text-primary">My Posted Tasks</h2>
            <p className="text-secondary mt-1">
              {tasks.length} {tasks.length === 1 ? "task" : "tasks"} posted
            </p>
          </div>

          {isMobileView ? (
            // Mobile view - enhanced card layout
            <div className="grid gap-5 p-4 sm:grid-cols-2 lg:hidden">
              {tasks.map(({ _id, title, description, deadline, budget }) => (
                <div
                  key={_id}
                  className="card hover:shadow-md transition-shadow duration-300"
                >
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-primary truncate">
                        {title}
                      </h3>
                      <span className="bg-accent text-accent px-2 py-1 rounded-full text-xs font-medium">
                        {budget ? `$${budget}` : "Flexible"}
                      </span>
                    </div>

                    <p className="text-secondary text-sm mb-4 line-clamp-2">
                      {description || "No description provided"}
                    </p>

                    <div className="flex items-center text-sm text-secondary mb-4">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {deadline
                        ? new Date(deadline).toLocaleDateString()
                        : "No deadline"}
                    </div>

                    <div className="flex space-x-2">
                      <Link
                        to={`/update/${_id}`}
                        className="flex-1 btn-orange py-2 px-3 text-center text-sm rounded-lg"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(_id)}
                        className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-3 text-sm rounded-lg"
                      >
                        Delete
                      </button>
                    </div>

                    <Link
                      to={`/bids/${_id}`}
                      className="w-full mt-2 border border-accent text-accent hover:bg-accent/10 py-2 px-3 text-sm rounded-lg text-center block"
                    >
                      View Bids
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Desktop/tablet view - enhanced table layout
            <div className="hidden lg:block overflow-x-auto">
              <table className="min-w-full divide-y divide-primary">
                <thead className="bg-secondary">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider"
                    >
                      Task Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider"
                    >
                      Deadline
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider"
                    >
                      Budget
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-primary uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-primary divide-y divide-primary">
                  {tasks.map(
                    ({ _id, title, description, deadline, budget }) => (
                      <tr
                        key={_id}
                        className="hover:bg-secondary/10 transition-colors duration-150"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                              <span className="text-orange-600 dark:text-orange-400 font-medium">
                                {title.charAt(0).toUpperCase()}
                              </span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-primary">
                                {title}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-secondary max-w-md line-clamp-2">
                            {description || "No description provided"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-secondary">
                            <div className="flex items-center">
                              <svg
                                className="w-4 h-4 mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              {deadline
                                ? new Date(deadline).toLocaleDateString()
                                : "No deadline"}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200">
                            {budget ? `$${budget}` : "Flexible"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                          <Link
                            to={`/update/${_id}`}
                            className="btn-orange px-4 py-2 rounded-lg"
                          >
                            Update
                          </Link>
                          <button
                            onClick={() => handleDelete(_id)}
                            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
                          >
                            Delete
                          </button>
                          <Link
                            to={`/bids/${_id}`}
                            className="border border-accent text-accent hover:bg-accent/10 px-4 py-2 rounded-lg"
                          >
                            Bids
                          </Link>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostedTask;
