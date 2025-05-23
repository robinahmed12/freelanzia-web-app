import React, { useContext, useEffect, useState } from "react";
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

    const response = await fetch(
      `https://freelanzia-server.vercel.app/update/${data._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          userEmail: user?.email,
        }),
      }
    );

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
  };
  useEffect(() => {
    document.title = "Update-task";
  });

  return (
    <>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-orange-50/20 to-gray-100/50 dark:from-gray-900 dark:to-gray-900">
        <div className="max-w-3xl mx-auto">
          {/* Animated Header */}
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-4xl font-bold text-accent sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-300">
              Update Your Task
            </h2>
          </div>

          {/* Card with Glass Morphism Effect */}
          <div className="card bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-primary transition-all duration-300 hover:shadow-2xl">
            {submitted && (
              <div className="bg-green-500/10 text-green-700 dark:text-green-300 p-4 text-center border-b border-green-500/20">
                <span className="font-medium">✓</span> Task submitted
                successfully!
              </div>
            )}

            <form
              onSubmit={handleUpdate}
              className="p-6 sm:p-8 md:p-10 space-y-6"
            >
              {/* User Info Section */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-1">
                  <label
                    htmlFor="userName"
                    className="text-sm font-medium text-secondary"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="userName"
                      value={user?.displayName || ""}
                      readOnly
                      className="input-field bg-gray-50/50 dark:bg-gray-700/50"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="userEmail"
                    className="text-sm font-medium text-secondary"
                  >
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="userEmail"
                      value={user?.email || ""}
                      readOnly
                      className="input-field bg-gray-50/50 dark:bg-gray-700/50"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 bg-white dark:bg-gray-800 text-sm text-gray-500 dark:text-gray-400">
                    Task Details
                  </span>
                </div>
              </div>

              {/* Task Title */}
              <div className="space-y-1">
                <label
                  htmlFor="title"
                  className="text-sm font-medium text-secondary"
                >
                  Task Title <span className="text-orange-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="e.g. Need a website for my business"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Category and Budget */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-1">
                  <label
                    htmlFor="category"
                    className="text-sm font-medium text-secondary"
                  >
                    Category <span className="text-orange-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="input-field"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="budget"
                    className="text-sm font-medium text-secondary"
                  >
                    Budget ($)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      min="0"
                      className="input-field"
                      placeholder="0.00"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span className="text-gray-500 dark:text-gray-400">
                        $
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deadline */}
              <div className="space-y-1">
                <label
                  htmlFor="deadline"
                  className="text-sm font-medium text-secondary"
                >
                  Deadline
                </label>
                <div className="relative">
                  <DatePicker
                    selected={formData.deadline}
                    onChange={handleDateChange}
                    minDate={new Date()}
                    className="input-field"
                    placeholderText="Select deadline date"
                    id="deadline"
                    dateFormat="MMMM d, yyyy"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1">
                <label
                  htmlFor="description"
                  className="text-sm font-medium text-secondary"
                >
                  Description <span className="text-orange-500">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Describe your task in detail..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button type="submit" className="btn-submit">
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-orange-100"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Update Task
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
