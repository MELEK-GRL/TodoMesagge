
import { RxDotsHorizontal } from "react-icons/rx";
import { AiFillHeart } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { BsFillSave2Fill } from "react-icons/bs";

import user from '../../assets/image/user.png'
import img6 from '../../assets/image/img-2.jpg'
import { useState } from "react";

export default function CartTheme() {
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
      
        <div className="rounded-md flex gap-2 flex-col justify-between items-center w-full  shadow-md">
          <div className="px-3  flex w-full items-center">
            <div className="flex w-full items-center  gap-3">
              <img
                src={user}
                alt={user}
                className="w-10 h-10 object-cover border rounded-full border-gray-300"
              />
              <div className="flex  flex-col  truncate">
                <span className="text-[12px] truncate font-semibold">
                  Ahmet Yıldız Kenter
                </span>
                <span className="text-[12px] truncate font-semibold text-orange-400">
                 Medical Doctor
                </span>
              </div>
            </div>
            <RxDotsHorizontal size={22} />
          </div>
          <img
            src={img6}
            alt={img6}
            className="w-full h-[250px] object-cover"
          />
          <div className="flex w-full px-3 flex-col gap-2">
            <div className="flex justify-between w-full">
              <div className="flex gap-1">
                <div className="flex flex-col items-center">
                  {" "}
                  <button onClick={likeToggle} className={like===false?'text-red-500':'text-gray-500'} >
                    <AiFillHeart size={22} />
                  </button>
                  <span className="text-[10px] font-semibold">3</span>
                </div>
                <div className="flex flex-col items-center">
                  {" "}
                  <button>
                    <IoMdShareAlt size={22} />
                  </button>
                  <span className="text-[10px] font-semibold">1</span>
                </div>
              </div>
              <button onClick={saveToggle} className={save===false?' text-green-500':'text-gray-500'}>
                <BsFillSave2Fill size={22} />
              </button>
            </div>
            <div className="flex boxStart w-full gap-[1px]">
              <span className="text-[10px] font-semibold">
                {" "}
               2 <span className="text-gray-500">Min *</span>
              </span>
              <span className="text-[10px] font-semibold">
                {" "}
                4 <span className="text-gray-500">Views *</span>
              </span>
              <span className="text-[10px] font-semibold">
                {" "}
               5 <span className="text-gray-500">Comments </span>
              </span>
            </div>
            <div className="flex w-full">
              <span className="text-sm truncate font-semibold">
              From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.
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
      
    </div>
  )
}