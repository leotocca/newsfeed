import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center items-center border-gray-700 border-b-2 h-20">
      <div className="h-full flex flex-col justify-center items-start flex-grow text-gray-800 ml-10">
        <h1 className="font-2xl font-semibold">Peek Into Argentina</h1>
        <p className="text-sm font-light">News from Argentina to the world</p>
      </div>
      <ul className="flex justify-center items-center mr-10">
        <li className="mx-5">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-5">
          <Link to="/Politics">Politics</Link>
        </li>
        <li className="mx-5">
          <Link to="/International">International</Link>
        </li>
        <li className="mx-5">
          <Link to="/Technology">Technology</Link>
        </li>
        <li className="mx-5">
          <Link to="/Shows">Shows</Link>
        </li>
        <li className="mx-5">
          <Link to="/Sports">Sports</Link>
        </li>
        <li className="mx-5">
          <Link to="/Design">Design</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
