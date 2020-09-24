import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex items-center bg-red-400">
        <div className="h-full flex flex-col justify-center items-start flex-grow text-gray-800 ml-10 my-2">
          <h1 className="font-2xl font-semibold text-white">
            Peek Into Argentina
          </h1>
          <p className="text-sm font-light text-white">
            News from Argentina to the world
          </p>
        </div>
        <div className="mr-10">
          <input type="text" className="w-full h-6" />
        </div>
      </div>

      <ul className="flex justify-center items-center py-2 bg-gray-200 w-full">
        <li className="mx-5 transition-all duration-150">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-5 transition-all duration-150">
          <Link to="/Politics">Politics</Link>
        </li>
        <li className="mx-5 transition-all duration-150">
          <Link to="/International">International</Link>
        </li>
        <li className="mx-5 transition-all duration-150">
          <Link to="/Technology">Technology</Link>
        </li>
        <li className="mx-5 transition-all duration-150">
          <Link to="/Shows">Shows</Link>
        </li>
        <li className="mx-5 transition-all duration-150">
          <Link to="/Sports">Sports</Link>
        </li>
        <li className="mx-5 transition-all duration-150">
          <Link to="/Design">Design</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
