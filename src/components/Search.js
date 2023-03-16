
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Search() {
    const searchRef = useRef(null);
    const searchToggle = () => {
        searchRef.current.classList.toggle("search");
    };
  return (
    <>
     <div className="flex items-center ">
      
     <div className="flex relative  ">
     <div className=" invisible absolute top-[-19px]  right-0" ref={searchRef}>
        <div className=" boxCenter  flex-col  shadow-md rounded  gap-1">
         <input className="focus:outline-none text-sm border   h-[37px] rounded w-full  placeholder:p-1 placeholder:text-gray-500 placeholder:text-sm" placeholder="search.."/>
        </div>
      </div>
     </div>
      <div className="boxCenter">
        <button onClick={searchToggle} className="cursor-pointer">
          <AiOutlineSearch size={17} />
        </button>
      </div>
    </div>
    </>
  );
};
