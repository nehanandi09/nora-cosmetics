import React from "react";
import logo from "../assets/noraLogo.png";

const Navbar = () => {
  return (
    <nav className="w-100 p-4 md:pr-20 md:pl-20 lg:pl-32 lg:pr-32 lg:pt-8 lg:pb-8">
      <div className="flex justify-between items-center">
        <img src={logo} alt="nora logo" className="w-24 md:w-36" />

        <ul className="w-2/5 hidden md:flex md:justify-end uppercase text-coffeePot2">
          <li className="mr-16">Home</li>
          <li>Products</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
