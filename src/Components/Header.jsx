import React from "react";
import logo from "../assets/assets/logo.png"

const Header = () => {
  return (
    <div className="shadow-md bg-white">
        <nav className="w-[90%] mx-auto flex justify-between items-center py-4 px-6 ">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-16" />
      </div>

      {/* Menu Items */}
      <ul className="flex gap-6 text-gray-700 font-semibold">
        <li className="cursor-pointer hover:text-blue-500">Home</li>
        <li className="cursor-pointer hover:text-blue-500">Fixture</li>
        <li className="cursor-pointer hover:text-blue-500">Teams</li>
        <li className="cursor-pointer hover:text-blue-500">Schedules</li>
      </ul>

      {/* Coin Button */}
      <button className="flex items-center gap-1 px-4 py-2 border border-gray-400 rounded-xl bg-white shadow-md">
        <span>0 Coin</span>
        <img className=" h-8" src="https://img.icons8.com/?size=48&id=sPBQkuep9vDA&format=png" alt="" />
      </button>
    </nav>
    </div>
  );
};

export default Header;
