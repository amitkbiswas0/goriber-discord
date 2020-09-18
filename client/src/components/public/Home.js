import React from "react";
import { Link } from "react-router-dom";

// components
import Navbar from "./Navbar";

// images
import bg from "../../static/images/bg.svg";
import devices from "../../static/images/devices.svg";

function Home() {
  return (
    <section
      className="h-screen bg-cover flex flex-col"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navbar />
      {/* Main */}
      <div className="w-full mb-auto px-6 md:px-12 mt-12 flex flex-row justify-center items-center">
        {/* left column */}
        <div className="w-full sm:w-2/3 md:w-4/5 flex flex-col justify-center items-center">
          <h1 className="mb-4 text-3xl md:text-5xl text-indigo-800 font-bold text-center md:text-left leading-tight">
            Trimmed Down but still works!
          </h1>
          <p className="mb-8 leading-normal text-xl md:text-2xl text-center md:text-left font-light">
            Try out this simple chatting app. Open rooms, invite friends and
            Talk all night long!
          </p>
          <div className="w-full px-12 flex justify-center md:justify-start items-center">
            <Link to="/login" className="btn btn-filled mr-4">
              Login
            </Link>
            <Link to="/signup" className="btn btn-transparent">
              Signup
            </Link>
          </div>
        </div>
        {/* right column */}
        <div className="w-full xl:w-3/5 hidden md:block">
          <img className="h-full mx-auto lg:mr-0" src={devices} alt="devices" />
        </div>
      </div>
      {/* footer */}
      <div className="w-full p-6 text-sm text-gray-600 text-center">
        <p> &copy; Goriber Discord 2020</p>
      </div>
    </section>
  );
}

export default Home;
