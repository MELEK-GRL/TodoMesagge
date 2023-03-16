import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import user from "../assets/image/user.png";
import { useRef } from "react";
export default function Dropdown() {
  const dropRef = useRef(null);
  const dropToggle = () => {
    dropRef.current.classList.toggle("dropdown");
  };

  return (
    <div className="flex items-center  flex-col">
      <div className="boxCenter gap-1">
        <img
          src={user}
          alt={user}
          className="border border-gray-300 rounded-full w-8 h-8 object-cover"
        />
        <button onClick={dropToggle} className="cursor-pointer">
          <MdKeyboardArrowDown size={17} />
        </button>
      </div>
      <div className="relative invisible" ref={dropRef}>
        <div className="absolute bg-slate-100 flex flex-col  shadow-md rounded w-24 m-0  right-0 p-1 gap-1">
          <Link to="#" className="p-[1px] hover:bg-white hover:rounded-md text-sm truncate text-gray-600" onClick={dropToggle}>
            Option 1
          </Link>
          <Link to="#" className="p-[1px] hover:rounded-md hover:bg-white text-sm truncate text-gray-600"  onClick={dropToggle}>
            {" "}
            Option 2
          </Link>
        </div>
      </div>
    </div>
  );
}