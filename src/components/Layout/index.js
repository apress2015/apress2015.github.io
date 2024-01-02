import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex justify-between border-b-2 mb-5">
        <div className="flex items-center">
          <a href="https://www.theactualized.com">
            <img
              className="p-5"
              src="/media/header-logo.png"
              alt="the actualized logo"
            />
          </a>
          <p className="font-serif text-gray-500 text-xl">
            Enjoy Our Rich Widget Set
          </p>
        </div>
        <div className="flex items-center px-5 gap-5">
          <a className="font-serif text-gray-500 text-xl" href="/">
            About Our Widget Design
          </a>
          <a className="font-serif text-gray-500 text-xl" href="/boheimian">
            Boheimian Design
          </a>
          <a className="font-serif text-gray-500 text-xl" href="/classic">
            Classic Design
          </a>
          <a className="font-serif text-gray-500 text-xl" href="/modern">
            Modern Design
          </a>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
