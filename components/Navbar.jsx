import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-10 h-16 bg-gradient-to-tr from-orange-400 to-purple-900 text-white">
      <div className="logo">
        <h1 className="text-xl font-black">Blog note</h1>
      </div>
      <div className="links">menu</div>
    </div>
  );
};

export default Navbar;
