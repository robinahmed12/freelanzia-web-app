import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const BidsPage = () => {
  const { taskId } = useParams();
  const [bids, setBids] = useState([]);

  useEffect(() => {
    fetch(`https://freelanzia-server.vercel.app/bids/${taskId}`)
      .then((res) => res.json())
      .then(setBids)
      .catch((err) => console.error("Error fetching bids:", err));
  }, [taskId]);

  return (
    <>
      {Array.isArray(bids) && bids.length > 0 ? (
        <ul className="space-y-4">
          {bids.map((bid) => (
            <li key={bid._id} className="p-3 border rounded shadow-sm">
              <p>
                <strong>Bidder:</strong> {bid.bidderEmail}
              </p>
              <p>
                <strong>Amount:</strong> ${bid.amount}
              </p>
              <p>
                <strong>Message:</strong> {bid.message}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(bid.createdAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No bids yet.</p>
      )}
    </>
  );
};

export default BidsPage;
