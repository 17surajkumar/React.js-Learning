import React from "react";
import { useParams } from "react-router-dom";

// useParams is a React Router hook that returns an object containing route parameters for the currently matched route

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-gray-600 text-white text-3xl p-4">
      <p>User: {userid}</p>
      <p>You are welcome here... {userid}</p>
    </div>
  );
}

export default User;
