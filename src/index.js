import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./tailwind.output.css";

const Newsfeed = () => (
  <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
    <App />
  </div>
);

ReactDOM.render(<Newsfeed />, document.querySelector("#root"));
