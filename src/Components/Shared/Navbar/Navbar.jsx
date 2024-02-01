import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side - Logo */}
        <Link to="/" className="text-white">
          <img
            height={100}
            width={100}
            src="https://i.ibb.co/PxddLS3/QBT-Logo-Black.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Right side - Navigation links */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>

          <Link to="/products" className="hover:text-gray-400">
            Movies
          </Link>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 text-white px-3 py-1 rounded"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
