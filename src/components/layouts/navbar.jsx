import React from "react";
import { NavLink } from "react-router";
export default function Navbar() {
  const menu = [
    {
      path: "/",
      title: "Home"
    },
    {
      path: "/products",
      title: "Products"
    },
    {
      path: "/carts",
      title: "Cart"
    },
    {
      path: "/about",
      title: "About"
    }
  ];
  return (
    <nav className=" bg-blue-900 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://www.cstad.edu.kh/_next/image?url=%2Fschool-logo%2Flogo-white-version.png&w=128&q=75"
            className="h-8"
            alt="Flowbite Logo"
          />
        </NavLink>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-blue-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menu.map((item) => (
              <li>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-amber-400" : "text-white"
                  }
                  aria-current="page"
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
