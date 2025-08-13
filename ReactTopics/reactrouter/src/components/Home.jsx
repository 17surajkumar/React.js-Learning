import React from "react";
import { Link } from "react-router-dom";

//Create simple components for each "page".

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-[calc(100vh-10rem)] animate-fade-in">
      <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 pb-2">
        Welcome to My Portfolio
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
        I am a passionate developer who builds beautiful and functional web
        applications with React and Tailwind CSS.
      </p>
      <Link
        to="/about"
        className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
      >
        Learn More About Me
      </Link>
    </div>
  );
};

export default Home;
