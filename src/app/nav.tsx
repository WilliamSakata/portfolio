"use client";

import React, { useState } from "react";
import Image from "next/image";
import avatarBackgroundRemoved from "../../public/avatarBackgroundRemoved.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Nav = () => {
  const navItems = [
    {
      id: 1,
      name: "Home",
      link: "#",
    },
    {
      id: 2,
      name: "About",
      link: "./#about",
    },
    {
      id: 3,
      name: "Projects",
      link: "#",
    },
    {
      id: 4,
      name: "Contact",
      link: "#",
    },
  ];

  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <nav className="md:px-10 py-4 px-7 md:flex justify-between items-center bg-white">
        <div className="flex items-center cursor-pointer gap-2">
          <div
            className="mr-1 bg-gradient-to-b from-yellow-300 rounded-full flex justify-center gap-2"
            style={{ width: "3rem", height: "3rem" }}
          >
            <Image
              src={avatarBackgroundRemoved}
              alt=""
              className="object-center pr-1 rounded-full"
              style={{ width: "3rem", height: "3rem", alignSelf: "center" }}
            ></Image>
          </div>
          <h1 className="text-md font-bold text-black font-mono">
            William Kenji T. Sakata
          </h1>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {isOpen ? <XMarkIcon /> : <Bars3Icon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-20" : "top-[-490px]"
          }`}
        >
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 hover:text-blue-700 font-bold rounded-xl m2 cursor-pointer duration-300 text-gray-500 md:my-0 md:ml-8"
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
