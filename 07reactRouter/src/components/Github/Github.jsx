import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/17surajkumar");
  return response.json();
};

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
    <div className="font-mono text-center m-4 p-2 bg-gray-700 text-white text-3xl">
      <h1 className="text-5xl">Github: {data.login}</h1>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}>
        <img
          className="m-5"
          src={data.avatar_url}
          alt="Git Picture"
          width={300}
        />

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexDirection: "column",
          }}
        >
          <p className="text-left text-emerald-500 font-mono">
            Name: {data.name}
          </p>
          <p className="text-left text-fuchsia-400 font-mono">
            College: {data.company}
          </p>
          <p className="text-left text-cyan-400 font-mono">Bio: {data.bio}</p>
          <p className="text-left text-amber-300 font-mono">
            Number of Repo: {data.public_repos}
          </p>
          <p className="text-left text-orange-400 font-mono">
            Following: {data.following}
          </p>

          <p className="text-left text-blue-300 font-mono">
            Followers: {data.followers}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Github;

/*

A loader is a function you attach to a route (when using the data-router APIs like createBrowserRouter). The router calls the loader before rendering the route’s component. The resolved value returned by the loader becomes available inside the component via useLoaderData().

~ Loader ek tarah ka pre-fetch function hai — route render hone se pehle data le aata hai, taaki component ko turant data mil jaye.

~ Router waits for loader to finish, so component receives data immediately (no loading flicker).


*/
