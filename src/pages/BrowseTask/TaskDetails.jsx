import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {
  FaShoppingCart,
  FaCode,
  FaCalendarAlt,
  FaDollarSign,
  FaArrowRight,
} from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

const TaskDetails = () => {
  const [bidsCount, setBidsCount] = useState(0);
  const { user } = useContext(AuthContext);

  const formatDeadline = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const data = useLoaderData();
  const { _id } = data;

  const handleBids = (id) => {
    setBidsCount((prev) => prev + 1);
    const bidderEmail = user?.email;
    const amount = bidsCount;
    const message = "I'm interested in this task.";

    const bidData = {
      taskId: id,
      bidderEmail,
      amount,
      message,
    };

    fetch("https://freelanzia-server.vercel.app/bids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bidData),
    })
      .then((res) => res.json())
      .then((data) => console.log("Bid submitted:", data));
  };

  useEffect(() => {
    if (!_id || !user?.email) return;

    fetch(`https://freelanzia-server.vercel.app/bids/${_id}/${user.email}`)
      .then((res) => res.json())
      .then((bids) => {
        setBidsCount(bids.length);
      });
  }, [_id, user?.email]);

  useEffect(() => {
    document.title = "Task-details";
  });

  return (
    <div className="min-h-screen bg-primary py-12 px-4 sm:px-6 lg:px-8">
      {/* Header with stats */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center mb-8">
          <div className="bg-accent  text-accent px-6 py-3 rounded-full font-medium shadow-sm">
            Your bids: <span className="font-bold">{bidsCount}</span>{" "}
            opportunity
            {bidsCount !== 1 ? "ies" : "y"}
          </div>
        </div>

        {/* Main Card */}
        <div className="max-w-4xl mx-auto card overflow-hidden transition-all duration-300 hover:shadow-lg">
          {/* Task Header with Status Ribbon */}
          <div className="relative">
            <div className="absolute top-4 right-0 bg-orange-500 text-white px-4 py-1 text-sm font-medium shadow-md transform translate-x-2 -rotate-3">
              {data.status || "Active"}
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start">
                <div className="p-3 rounded-xl bg-orange-100 text-orange-600 mr-4 dark:bg-orange-900/30 dark:text-orange-300">
                  <FaShoppingCart className="text-2xl" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2">
                    {data.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 mt-3">
                    <span className="inline-flex items-center bg-secondary text-secondary px-3 py-1 rounded-full text-sm">
                      <FaCode className="mr-1.5" />
                      {data.category}
                    </span>
                    {data.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 dark:bg-gray-700 text-secondary px-3 py-1 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Task Description */}
          <div className="px-6 sm:px-8 pb-6">
            <div className="prose max-w-none text-secondary mb-6">
              <p className="text-lg leading-relaxed">{data.description}</p>
            </div>

            {/* Divider with decorative element */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-primary"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-primary px-4 text-secondary">
                  <FaArrowRight className="text-orange-500 dark:text-orange-400" />
                </span>
              </div>
            </div>

            {/* Meta Information and CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center">
                  <FaCalendarAlt className="text-secondary mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-secondary">Deadline</p>
                    <p className="font-medium text-primary">
                      {formatDeadline(data.deadline)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaDollarSign className="text-secondary mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-secondary">Budget</p>
                    <p className="font-medium text-primary">${data.budget}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleBids(_id)}
                className="btn-orange px-8 py-3 rounded-lg font-medium text-lg flex items-center justify-center space-x-2 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                <span>Place Bid</span>
                <FaArrowRight className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
