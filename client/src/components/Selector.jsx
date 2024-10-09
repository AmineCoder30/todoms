import React, { useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";
function Selector({ onChange, currentState, list }) {
  const [showMenu, setshowMenu] = useState(false);
  const handleSelect = (item) => {
    onChange(item);
    setshowMenu(false);
  };
  return (
    <div className="relative bg-gray-700 text-gray-200 border-0 rounded-md p-2  focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setshowMenu(!showMenu)}
      >
        <p className=" capitalize">{currentState}</p>
        <IoIosArrowDropup
          onClick={() => setshowMenu(!showMenu)}
          className={`hover:scale-[1.2] text-[17px] duration-500 ${
            showMenu ? "rotate-180" : ""
          }`}
        />
      </div>
      <ul
        className={`absolute top-[44px] right-0 w-fit duration-100 z-50 origin-top ${
          showMenu ? "scale-y-1" : "scale-y-0"
        } bg-[#18181c]`}
      >
        {list.map((item, index) => {
          return (
            <li
              className="text-[14px]"
              key={index}
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Selector;
