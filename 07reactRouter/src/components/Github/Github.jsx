import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/17surajkumar")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center m-4 p-2 bg-gray-700 text-white text-3xl">
      Github Followers: {data.followers}
      <img
        className="m-5"
        src={data.avatar_url}
        alt="Git Picture"
        width={300}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/17surajkumar");
  return response.json();
};
