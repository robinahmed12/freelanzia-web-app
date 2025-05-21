import React from "react";
import { Link } from "react-router";

const BrowseCard = ({ task }) => {
  const { category, title, deadline, budget , _id } = task;
  return (
    <>
      <div
        key={task.id}
        className="bg-white rounded-lg shadow-md overflow-hidden border border-[#eee] hover:shadow-lg transition-shadow duration-300"
      >
        <div className="p-5">
          <h3 className="text-xl font-semibold text-[#333333] mb-2">{title}</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-[#666]">Category</p>
              <p className="font-medium text-[#333333]">{category}</p>
            </div>
            <div>
              <p className="text-sm text-[#666]">Deadline</p>
              <p className="font-medium text-[#333333]">{deadline}</p>
            </div>
            <div>
              <p className="text-sm text-[#666]">Budget</p>
              <p className="font-medium text-[#FF6F00]">{budget}</p>
            </div>
          </div>
        </div>
        <div className="px-5 py-4 bg-[#f9f9f9] border-t border-[#eee]">
          <Link
            to={`/details/${_id}`}
            className="w-full bg-[#FF6F00] hover:bg-[#E65A00] text-white font-medium py-2 px-4 rounded transition-colors duration-300 inline-block text-center"
          >
            See Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default BrowseCard;
