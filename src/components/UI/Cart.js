
import { RxDotsHorizontal } from "react-icons/rx";
import { AiFillHeart } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { BsFillSave2Fill } from "react-icons/bs";

import cartData from "../../data/carData";
import { useState } from "react";


export default function Cart() {
    const[like,setLike]=useState('text-gray-500')
    const[save,setSave]=useState('text-gray-500')
const likeToggle=()=>{
    setLike(!like)
}   
const saveToggle=()=>{
    setSave(!save)
}  


  return (
    <div className="w-full flex flex-col gap-6">
      {cartData.map((item) => (
        <div key={item.id} className="rounded-md flex gap-2 flex-col justify-between items-center w-full  shadow-md">
          <div className="px-3  flex w-full items-center">
            <div className="flex w-full items-center  gap-3">
              <img
                src={item.icon}
                alt={item.icon}
                className="w-10 h-10 object-cover border rounded-full border-gray-300"
              />
              <div className="flex  flex-col  truncate">
                <span className="text-[12px] truncate font-semibold">
                  {item.name} {item.surname}
                </span>
                <span className="text-[12px] truncate font-semibold text-orange-400">
                  {item.title}
                </span>
              </div>
            </div>
            <RxDotsHorizontal size={22} />
          </div>
          <img
            src={item.image}
            alt={item.image}
            className="w-full h-[250px] object-cover"
          />
          <div className="flex w-full px-3 flex-col gap-2">
            <div className="flex justify-between w-full">
              <div className="flex gap-1">
                <div className="flex flex-col items-center">
                  {" "}
                  <button onClick={likeToggle}  className={like===false?'text-red-500':'text-gray-500'} >
                    <AiFillHeart size={22} />
                  </button>
                  <span className="text-[10px] font-semibold">{item.like}</span>
                </div>
                <div className="flex flex-col items-center">
                  {" "}
                  <button>
                    <IoMdShareAlt size={22} />
                  </button>
                  <span className="text-[10px] font-semibold">{item.share}</span>
                </div>
              </div>
              <button onClick={saveToggle} className={save===false?' text-green-500':'text-gray-500'}>
                <BsFillSave2Fill size={22} />
              </button>
            </div>
            <div className="flex boxStart w-full gap-[1px]">
              <span className="text-[10px] font-semibold">
                {" "}
                {item.min} <span className="text-gray-500">Min *</span>
              </span>
              <span className="text-[10px] font-semibold">
                {" "}
                {item.views} <span className="text-gray-500">Views *</span>
              </span>
              <span className="text-[10px] font-semibold">
                {" "}
                {item.comments} <span className="text-gray-500">Comments </span>
              </span>
            </div>
            <div className="flex w-full  ">
              <span className="text-sm truncate font-semibold">
                {item.text}
              </span>
            </div>
            <div className="flex w-full gap-2">
              <span className="text-[10px] font-semibold text-gray-500">
                #child
              </span>

              <span className="text-[10px] font-semibold text-gray-500">
                #hospital
              </span>
              <span className="text-[10px] font-semibold text-gray-500">
                #fever
              </span>
            </div>
            <div className="flex py-1 w-full justify-between">
              <span className="text-sm font-semibold text-gray-400">
                Comment This
              </span>
              <button className="text-[12px] rounded-lg border border-gray-400 font-semibold text-gray-400 postHover">
                Post
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}