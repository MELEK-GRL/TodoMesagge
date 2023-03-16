import { RxDotsHorizontal } from "react-icons/rx";
import { AiFillHeart } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { BsFillSave2Fill } from "react-icons/bs";

import containers from "../../data/containers";

export default function Containers() {
  return (
    <div className="w-full flex flex-col gap-6">
      {containers.map((item) => (
        <div key={item.id} className="rounded-md flex gap-2 flex-col justify-between items-center w-full  shadow-md">
          <div className="px-3  flex w-full items-center">
            <div className="flex w-full items-center  gap-3">
              <img
                src={item.icon}
                alt={item.icon}
                className="w-6 h-6 object-cover border rounded-full border-gray-300"
              />
              <div className="flex  flex-col  truncate">
                <span className="text-[11px] truncate font-semibold">
                  Ahmet Yıldız Kenter
                </span>
              </div>
            </div>
          </div>
          <img
            src={item.image}
            alt={item.image}
            className="w-full h-[80px] object-cover"
          />
          <div className="flex w-full px-3 flex-col gap-2">
            <div className="flex justify-between  w-full gap-[1px]">
              <span className="text-[10px] font-semibold">
                {" "}
                4 <span className="text-gray-500">Likes</span>
              </span>
              <span className="text-[10px] font-semibold">
                {" "}
                5 <span className="text-gray-500">Comments </span>
              </span>
            </div>
            <div className="flex w-full">
              <span className="text-[10px] h-[20px] truncate font-semibold">
                From its medieval origins to the digital era, learn everything
                there is to know about the ubiquitous lorem ipsum passage.
              </span>
            </div>
           
          </div>
        </div>
      ))}
    </div>
  );
}