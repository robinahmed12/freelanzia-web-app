import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";

const UpdateTask = () => {
  const data = useLoaderData();

  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    title: data?.title || "",
    category: data?.category || "Web Development",
    description: data?.description || "",
    deadline: data?.deadline ? new Date(data.deadline) : null,
    budget: data?.budget || "",
  });

  console.log(formData);

  const [submitted, setSubmitted] = useState(false);

  const categories = [
    "Web Development",
    "Design",
    "Writing",
    "Marketing",
    "Content Creation",
    "SEO",
    "Data Analysis",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      deadline: date,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://freelanzia-server.vercel.app/update/${data._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userEmail: user?.email,
        }),
      });

      const result = await response.json();

      if (result.modifiedCount > 0) {
        Swal.fire("Success!", "Task updated successfully", "success");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);

        // Clear form only if update was successful
        setFormData({
          title: "",
          category: "Web Development",
          description: "",
          deadline: null,
          budget: "",
        });
      } else {
        Swal.fire("Notice", "No changes were made", "info");
      }
    } catch (error) {
      console.error("Error updating task:", error);
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  return (
    <>
      <div className="min-h-screen mt-20 bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Update Your Task
            </h2>
          </div>

          <div className="bg-white shadow rounded-lg p-6 sm:p-8">
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
                Task submitted successfully!
              </div>
            )}

            <form onSubmit={handleUpdate} className="space-y-6">
              {/* User Info (Read Only) */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="userName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    id="userName"
                    value={user?.displayName || ""}
                    readOnly
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-100 text-gray-600 focus:outline-none focus:ring-0 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="userEmail"
                    className="block text-sm font-medium text-gray-700"
                  >
                    User Email
                  </label>
                  <input
                    type="email"
                    id="userEmail"
                    value={user?.email || ""}
                    readOnly
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-100 text-gray-600 focus:outline-none focus:ring-0 sm:text-sm"
                  />
                </div>
              </div>

              {/* Task Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Task Title <span className="text-orange-600">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category <span className="text-orange-600">*</span>
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description <span className="text-orange-600">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>

              {/* Deadline and Budget */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="deadline"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Deadline
                  </label>
                  <DatePicker
                    selected={
                      formData.deadline ? new Date(formData.deadline) : null
                    }
                    onChange={handleDateChange}
                    minDate={new Date()}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    placeholderText="Select a date"
                    id="deadline"
                  />
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Budget ($)
                  </label>
                  <input
                    type="number"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    min="0"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateTask;
