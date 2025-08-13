import React from "react";
import { Link, NavLink } from "react-router-dom";

//This component uses <Link> to create the navigation links.
// We can also use Navlink here for active link styling

// You use <Link to="/about">About Us</Link> instead of <a href="/about">. This provides instant navigation.

// <Link>: The component for creating navigation links. It's a special version of the HTML <a> tag that changes the URL without reloading the page.

function Navbar() {
  // This function will be used by NavLink to apply conditional classes

  const getLinkClass = ({ isActive }) => {
    return isActive
      ? "text-white bg-slate-700 rounded-md px-3 py-2 text-sm font-medium"
      : "text-slate-300 hover:bg-slate-800 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-colors";
  };

  return (
    <nav className="bg-slate-900/70 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 items-center">
              {/* You can put your logo or name here */}
              <NavLink to="/" className="text-white font-bold text-xl">
                My Portfolio
              </NavLink>
            </div>
          </div>
          <div className="flex space-x-4">
            <NavLink to="/" className={getLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={getLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={getLinkClass}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
