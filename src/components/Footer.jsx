import React from "react";

const Footer = () => {
  return (
    <div className="bg-black items-center justify-between pt-9 space-y-6 px-9 grid grid-cols md:grid-cols-4 text-white">
      <div>
        <p className="text-5xl">CRESCENDO</p>
        <input
          type="text"
          className="border border-amber-50 py-2 mt-4 px-8 rounded-md"
          placeholder="search produc..."
        />
      </div>
      <div>
        <p>Home</p>
        <p>projec</p>
        <p>Contaft</p>
        <p>cart</p>
      </div>

      <div>
        <p>Home</p>
        <p>projec</p>
        <p>Contaft</p>
        <p>cart</p>
      </div>

      <div>
        <p>Home</p>
        <p>projec</p>
        <p>Contaft</p>
        <p>cart</p>
      </div>
      <p className="text-center pb-5">&copy; all right reserved</p>
    </div>
  );
};

export default Footer;
