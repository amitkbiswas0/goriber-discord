import React from "react";
import { Link } from "react-router-dom";

// images
import logo from "../../static/images/logo192.png";

function Navbar() {
  return (
    <div className="w-full h-16 p-4 mx-auto mb-auto flex justify-between items-center">
      <Link to="/" className="h-full flex items-center">
        <img className="h-full" src={logo} alt="logo" />
        <p className="ml-2 text-indigo-600 font-bold text-xl lg:text-2xl">
          Goriber Discord
        </p>
      </Link>
    </div>
  );
}

export default Navbar;
