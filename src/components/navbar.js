import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex items-center bg-red-600">
        <div className="h-full flex flex-col justify-center items-start flex-grow text-gray-800 ml-10 my-2">
          <h1 className="font-2xl font-semibold text-white">
            Peek Into Argentina
          </h1>
          <p className="text-sm font-light text-white">
            News from Argentina to the world
          </p>
        </div>

        <SearchBar />
      </div>

      <ul className="w-full hidden md:flex justify-center items-center py-2 bg-gray-300">
        <li className="mx-5">
          <Link
            className="transition-all duration-150 hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white px-3 rounded py-1"
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="mx-5">
          <Link
            className="transition-all duration-150 hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white px-3 rounded py-1"
            to="/Politics"
          >
            Politics
          </Link>
        </li>
        <li className="mx-5">
          <Link
            className="transition-all duration-150 hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white px-3 rounded py-1"
            to="/International"
          >
            International
          </Link>
        </li>
        <li className="mx-5">
          <Link
            className="transition-all duration-150 hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white px-3 rounded py-1"
            to="/Technology"
          >
            Technology
          </Link>
        </li>
        <li className="mx-5">
          <Link
            className="transition-all duration-150 hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white px-3 rounded py-1"
            to="/Shows"
          >
            Shows
          </Link>
        </li>
        <li className="mx-5">
          <Link
            className="transition-all duration-150 hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white px-3 rounded py-1"
            to="/Sports"
          >
            Sports
          </Link>
        </li>
        <li className="mx-5">
          <Link
            className="transition-all duration-150 hover:bg-red-500 hover:text-white active:bg-red-500 active:text-white px-3 rounded py-1"
            to="/Design"
          >
            Design
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
