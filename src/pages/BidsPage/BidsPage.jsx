import React, { useEffect, useState } from "react";

const BidsPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://freelanzia-server.vercel.app/bids"
        );
        if (!response.ok) throw new Error("Failed to fetch bids");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        console.log();
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 p-4 rounded-lg">
        <p>Error loading bids: {error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-8 text-center">
        Current Bids
      </h1>

      {Array.isArray(data) && data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((bid) => (
            <div
              key={bid._id}
              className="card bg-primary hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-lg text-accent">
                      {bid.bidderEmail.split("@")[0]}
                    </h3>
                    <span className="text-sm text-secondary">
                      {bid.bidderEmail}
                    </span>
                  </div>
                  <span className="bg-orange-100 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm font-medium">
                    ${bid.amount}
                  </span>
                </div>

                <div className="border-t border-primary pt-3 mt-3">
                  <p className="text-secondary mb-4 line-clamp-3">
                    {bid.message}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-secondary">
                      {new Date(bid.createdAt).toLocaleDateString()}
                    </span>
                    <span className="text-secondary">
                      {new Date(bid.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="mx-auto w-24 h-24 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-primary mb-2">No bids yet</h3>
          <p className="text-secondary max-w-md mx-auto">
            Be the first to place a bid on this project!
          </p>
        </div>
      )}
    </div>
  );
};

export default BidsPage;
