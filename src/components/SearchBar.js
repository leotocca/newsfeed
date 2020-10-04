import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchKeyword } from "../actions";

export const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const handleInput = (input) => {
    setKeyword(input);
    dispatch(setSearchKeyword(input));
  };

  return (
    <div className="relative mr-10">
      <input
        type="text"
        className="w-full h-6 mr-6 right rounded shadow border-gray-400 border text-sm px-3 py-3 focus:outline-none"
        placeholder="Search a keyword"
        onChange={(e) => handleInput(e.target.value)}
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
  );
};
