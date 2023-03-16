import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/image/logo.webp";

import menuData from "../../data/menuData";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsFillBellFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useRef } from "react";
import DropDown from "../Dropdown";
import Search from "../Search";
import { IconContext } from "react-icons/lib";
export default function Header() {
  const menu = useRef(null);
  const menuToggle = () => {
    menu.current.classList.toggle("activeVisible");
  };
  return (
    <div className="flex flex-col w-full z-20 bg-white">
      <div className="bg-headers flex items-center w-full justify-between shadow-md fixed px-8 py-[2px]">
       <Link to='/'> <img src={logo} alt={logo} className="w-20 h-10 object-contain" /></Link>
        <nav className="boxCenter gap-6 md:visible invisible w-0 md:w-fit colorText ">
          <span className="rounded-full bg-orange-700 p-[2px] text-white font-bold">
            <HiOutlinePlusSm size={14} />
          </span>
          {menuData.map((menu, index) => (
            <NavLink
              key={index}
              className={(navClass) =>
                navClass.isActive ? "aciteves" : "activeNone"
              }
              to={menu.path}
            >
              {menu.display}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Search />
          <div className="borderMenu boxCenter gap-3 pl-3 pr-3">
            <div className="flex relative">
              <span className="w-4 h-4 bg-red-700 p-[1px] rounded-full absolute bottom-3 left-3 text-white boxCenter text-[9px] font-semibold">
                1
              </span>
              <BsEnvelopeFill size={17} />
            </div>
            <div className="flex relative">
              <span className="w-4 h-4 bg-red-700 p-[1px] rounded-full absolute bottom-3 left-2 text-white boxCenter text-[9px] font-semibold">
                2
              </span>
              <BsFillBellFill size={17} />
            </div>
          </div>
          <div className=" flex ">
            <DropDown />
          </div>
          <div className="flex item-center w-fit md:w-0 md:invisible visible cursor-pointer">
            <AiOutlineMenu size={17} onClick={menuToggle} />
          </div>
        </div>
      </div>
      <div
        ref={menu}
        className=" invisible flex absolute w-full justify-end items-end h-full max-h-full"
      >
        <div
          onClick={menuToggle}
          className="cursor-pointer bg-black opacity-20 w-[50%] sm:w-[60%] md:w-[65%] lg:w-[70%]  xl:w-[80%] h-full"
        ></div>

        <div className="flex flex-col gap-32 h-full max-h-full p-2 w-[50%] sm:w-[40%] md:w-[35%] lg:w-[30%]  xl:w-[20%] bg-slate-100">
          <div className="flex w-full mt-4">
            <RxCross2
              size={23}
              className="ml-4 cursor-pointer"
              onClick={menuToggle}
            />
          </div>
          <div className="boxCenter">
            <nav className="boxCenter gap-6 w-[50%] max-w-full flex-col">
              <IconContext.Provider value={{ color: "#fff" }}>
                {menuData.map((menu, index) => (
                  <div key={index} className="boxCenter w-full">
                    <NavLink
                      to={menu.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "aciteves boxCenter"
                          : "activeNone boxCenter"
                      }
                    >
                      <span
                        className="text-[18px] boxCenter"
                        onClick={menuToggle}
                      >
                        {" "}
                        {menu.display}
                      </span>
                    </NavLink>
                  </div>
                ))}
              </IconContext.Provider>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}