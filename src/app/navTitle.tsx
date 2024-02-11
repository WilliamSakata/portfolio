import React from "react";
import Image from "next/image";
import avatarBackgroundRemoved from "../../public/avatarBackgroundRemoved.png";

const NavTitle = () => {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 cursor-pointer">
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
      <h1 className="text-xl text-black font-mono">William Kenji T. Sakata</h1>
    </div>
  );
};

export default NavTitle;
