import React from "react";
import Image from "next/image";
import avatarBackgroundRemoved from "../../public/avatarBackgroundRemoved.png";

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
  return (
    <nav className="flex bg-gray-50 justify-between items-center h-24 max-w mx-auto px-4">
      <div className="flex items-center cursor-pointer">
        <div
          className="mr-1 bg-gradient-to-b from-yellow-300 rounded-full flex justify-center"
          style={{ width: "4.5rem", height: "4.5rem" }}
        >
          <Image
            src={avatarBackgroundRemoved}
            alt=""
            className="object-center pr-1 rounded-full"
            style={{ width: "4rem", height: "4rem", alignSelf: "center" }}
          ></Image>
        </div>
        <h1 className="text-xl text-black font-mono">
          William Kenji T. Sakata
        </h1>
      </div>
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-blue-900 hover:opacity-70 rounded-xl m2 cursor-pointer duration-300 text-gray-500 hover:text-white"
          >
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
