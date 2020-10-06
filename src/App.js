import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import storeFactory from "./store";

const store = storeFactory();

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="h-full">
          <Navbar />
          <Routes />
        </div>
      </Router>
    </Provider>
  );
}
