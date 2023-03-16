import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import cartData from "../../data/carData";
import { useState } from "react";
import {Link} from 'react-router-dom'

// function NextBtn(props) {
//     const { className, style, onClick } = props;
//     return (
//       <button
//         className="bg-white shadow left-[-9px] text-white w-[24px] h-[24px] bottom-[5em] absolute border-none rounded"
//         style={style}
//         onClick={onClick}
//       >
//         <MdKeyboardArrowLeft className=" w-[1.2em] h-[1em] top-[0px] right-[1px] relative text-gray-400" />
//       </button>
//     );
//   }
//   function PrevtBtn(props) {
//     const { className, style, onClick } = props;

//     return (
//       <button
//         className="bg-white shadow w-[24px] h-[24px] text-white absolute z-10 top-[6em] right-[9px] border-none rounded"
//         style={style}
//         onClick={onClick}
//       >
//         <MdKeyboardArrowRight className=" w-[1.2em] h-[1em] top-[0px] right-[0px] relative text-gray-400" />
//       </button>
//     );
//   }

export default function Slide() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    // nextArrow: <NextBtn />,
    // prevArrow: <PrevtBtn />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3.5,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 3.5,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const year = new Date().getFullYear();

  
  return (
    <div className="w-full  flex">
      <div className="w-full">
        <Slider {...settings}>
          {cartData.map((item) => (
            <div key={item.id} className="flex">
              <div className="w-[100%]  shadow-lg rounded-md  gap-2  boxCenter  flex-col">
                <div className="boxCenter flex-col gap-[1px]">
                  <span className="text-[13px] font-semibold">Momsista</span>
                  <span className="text-[17px] truncate font-bold">Family Meeting</span>
                  <span className="text-[12px] text-gray-400">July {year}</span>

                </div>
                <img
                  alt={item.image}
                  src={item.image}
                  className=" h-[100px] object-cover rounded w-full border border-gray-300"
                />
               
             <div className="boxCenter w-full">
             <Link to='#' className="bttonSlide">Join</Link>
             </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}