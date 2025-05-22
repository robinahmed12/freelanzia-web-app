import React from "react";
import { useNavigate } from "react-router";

const Error = ({ errorCode = "404", errorMessage = "Page Not Found" }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          {/* Error Header */}
          <div className="bg-[#FF6F00] p-6 text-center">
            <h1 className="text-5xl font-bold text-white">{errorCode}</h1>
          </div>

          {/* Error Content */}
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-[#333333] mb-2">
              Oops! Something went wrong
            </h2>
            <p className="text-[#333333] mb-6">
              {errorMessage ||
                "The page you're looking for doesn't exist or another error occurred."}
            </p>

            {/* Back to Home Button */}
            <button
              onClick={() => navigate("/")}
              className="bg-[#FF6F00] hover:bg-[#E65C00] text-white font-medium py-2 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#FF6F00] focus:ring-opacity-50"
            >
              Back to Home
            </button>
          </div>

          {/* Footer Note */}
          <div className="bg-gray-50 px-6 py-4 text-center">
            <p className="text-sm text-[#333333]">
              Need help? Contact our support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
