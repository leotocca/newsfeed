import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchKeyword } from "../actions";
import { useKeyPress } from "../utilities/useKeyPress";

export const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const pressedEnter = useKeyPress("Enter");

  if (pressedEnter) {
    if (keyword !== "") {
      dispatch(setSearchKeyword(keyword));
    }
  }

  const dispatchSearch = () => {
    if (keyword !== "") {
      dispatch(setSearchKeyword(keyword));
    }
  };

  return (
    <div className="flex items-center">
      <div className="relative">
        <input
          type="text"
          className="w-full h-8 mr-6 right rounded shadow border-gray-400 border text-sm px-3 py-3 focus:outline-none"
          placeholder="Search a keyword"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <div
          className={`absolute top-0 right-0 h-3 w-3 mt-2 mr-2 ${
            keyword ? "hidden" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="fill-current text-gray-500"
          >
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
          </svg>
        </div>
      </div>
      <button
        onClick={() => dispatchSearch()}
        className="px-4 h-8 rounded transition-all duration-150 font-semibold text-md shadow-lg bg-red-700 text-white hover:bg-transparent hover:text-red-600 hover:border-red-600 md:bg-transparent md:text-white md:border md:border-white md:hover:shadow-lg md:hover:bg-white md:hover:text-red-500 md:px-2 md:py-0 md:ml-2"
      >
        Search
      </button>
    </div>
  );
};
