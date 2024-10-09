import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

import navbarList from "../tools/NavbarList";

function NavBar({ filterName, setfilterName, setshowNavbar, showNavbar }) {
  const { user } = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <div
      className={`filters  z-50 h-[520px] bg-[#18181c] w-[250px] py-[20px]
     px-[22px] rounded-[20px] absolute md:relative top-0 left-0 duration-100 
     ${!showNavbar ? "translate-x-[-100%] md:translate-x-0" : "translate-x-0"} 
     `}
    >
      <div className="flex justify-between items-center text-white mb-[20px]">
        <h3 className="text-[#898ACC]  text-[25px]">filters</h3>
        <RxCross2
          className="cursor-pointer text-[25px] hover:rotate-90 duration-150 block md:hidden"
          onClick={() => setshowNavbar(false)}
        />
      </div>

      <ul className="flex flex-col  gap-1 text-[#7E7E7E]">
        {navbarList.map((item, index) => {
          return (
            <li
              key={index}
              className={`${
                filterName.value.toLowerCase().slice("0", "2") ===
                item.value.toLowerCase().slice("0", "2")
                  ? "bg-[#2f2d36] text-white"
                  : ""
              } flex items-center gap-2 p-2 hover:bg-[#2f2d36] hover:text-white`}
              onClick={() =>
                setfilterName(
                  item.name === "priority"
                    ? { ...item, value: item.value.split(" ")[0] }
                    : item
                )
              }
            >
              {item.name === "today" ? item.name : item.value}
            </li>
          );
        })}
      </ul>
      <div className="flex items-center gap-2 absolute bottom-0 left-0 p-3">
        <div className="icon_user rounded p-[5xp]">
          <CiUser />
        </div>
        <h4 className="text-[17px] text-[#898acc]  capitalize ">
          {user && user?.userName?.slice(0, 10)}
        </h4>
      </div>
    </div>
  );
}

export default NavBar;
