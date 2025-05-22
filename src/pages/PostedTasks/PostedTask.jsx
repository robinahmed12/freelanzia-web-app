import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { Link } from "react-router";

const PostedTask = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);
  const email = user?.email;

  const [isMobileView, setIsMobileView] = useState(false);

  // Check screen size on component mount and resize
  useState(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (!email) {
      console.warn("No userEmail provided");
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(`https://freelanzia-server.vercel.app/tasks?email=${encodeURIComponent(email)}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch tasks");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched tasks:", data);
        setTasks(data);
      })
      .catch((e) => {
        console.error("Fetch error:", e);
        setTasks([]);
      })
      .finally(() => setLoading(false));
  }, [email]);

  // Handler functions
  const handleUpdate = (taskId) => {
    console.log("Update clicked for task id:", taskId);
    // TODO: open update modal or navigate to update page
  };

  const handleDelete = async (taskId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete task");

      // Show success alert
      await Swal.fire({
        title: "Deleted!",
        text: "Your task has been deleted.",
        icon: "success",
      });

      // Remove task from state
      setTasks((prev) => prev.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Delete failed",
      });
    }
  };

  if (loading) return <div>Loading tasks...</div>;
  if (tasks.length === 0) return <div>No tasks posted yet.</div>;

  return (
    <>
      <div className="bg-white rounded-lg mt-20 max-w-7xl mx-auto shadow-md p-6">
        <h2 className="text-2xl mt-12 text-center font-bold text-gray-800 mb-6">
          My Posted Tasks
        </h2>

        {isMobileView ? (
          // Mobile view - card layout
          <div className="space-y-4">
            {tasks.map(({ _id, title, description, deadline, budget }) => (
              <div
                key={_id}
                className="border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <div className="mb-3">
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {description || "No description"}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm mb-3">
                  <div>
                    <p className="text-gray-500">Deadline</p>
                    <p className="text-gray-800">
                      {deadline ? new Date(deadline).toLocaleDateString() : "-"}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Budget</p>
                    <p className="text-gray-800">
                      {budget ? `$${budget}` : "-"}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleUpdate(_id)}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1 rounded text-sm"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(_id)}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/bids/${_id}`}
                    className="border border-amber-600 text-amber-600 hover:bg-amber-50 px-3 py-1 rounded text-sm"
                  >
                    Bids
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Desktop/tablet view - table layout
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Deadline
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Budget
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tasks.map(({ _id, title, description, deadline, budget }) => (
                  <tr key={_id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {title}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500 max-w-xs truncate">
                        {description || "-"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {deadline
                          ? new Date(deadline).toLocaleDateString()
                          : "-"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {budget ? `$${budget}` : "-"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap space-x-2">
                      <Link
                        to={`/update/${_id}`}
                        onClick={() => handleUpdate(_id)}
                        className="bg-amber-600 hover:bg-amber-700 text-white px-3 py-1 rounded text-sm"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(_id)}
                        className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                      <Link to={`/bids/${_id}`}
                        // onClick={() => handleViewBids(_id)}
                        className="border border-amber-600 text-amber-600 hover:bg-amber-50 px-3 py-1 rounded text-sm"
                      >
                        Bids
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default PostedTask;
