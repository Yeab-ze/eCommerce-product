import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <div className="text-xl font-bold tracking-wide">CRESCENDO</div>

      <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-700">
        <li className="hover:text-black cursor-pointer">Home</li>
        <li className="hover:text-black cursor-pointer">Products</li>
        <li className="hover:text-black cursor-pointer">About</li>
        <li className="hover:text-black cursor-pointer">Price</li>
        <li className="hover:text-black cursor-pointer">Pages</li>
      </ul>

      <button className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
        Buy Template
      </button>
    </nav>
  );
};

export default Navbar;
