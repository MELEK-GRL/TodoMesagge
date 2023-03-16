import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import cartData from "../../data/carData";
import { useState } from "react";
import { Link } from "react-router-dom";



function NextBtn(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className="bg-white shadow left-[-9px] text-white w-[24px] h-[24px] bottom-[5em] absolute border-none rounded"
        style={style}
        onClick={onClick}
      >
        <MdKeyboardArrowLeft className=" w-[1.2em] h-[1em] top-[0px] right-[1px] relative text-gray-400" />
      </button>
    );
  }
  function PrevtBtn(props) {
    const { className, style, onClick } = props;


    return (
      <button
        className="bg-white shadow w-[24px] h-[24px] text-white absolute z-10 top-[6em] right-[-8px] border-none rounded"
        style={style}
        onClick={onClick}
      >
        <MdKeyboardArrowRight className=" w-[1.2em] h-[1em] top-[0px] right-[0px] relative text-gray-400" />
      </button>
    );
  }

export default function Sliders() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextBtn />,
        prevArrow: <PrevtBtn />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 3.5,
                    arrows:false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 3.5,
                    arrows:false
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1.4,
                    slidesToScroll: 1,
                    arrows:false
                }
            }
        ]
      };

      const [follow,setFollow]=useState()

      const FollowToggle=()=>{
        setFollow(!follow)
      }
  return (
    <div className="w-full flex-col  flex p-2 bg-gray-300 rounded-md">
      <div className="flex w-full p-2">
        <div className="text-[13px] text-gray-500 font-semibold w-[75%] sm:w-[87%] boxCenter">Members You May Know</div>
        <div className="text-[13px] text-gray-500 font-semibold sm:w-[25%] boxEnd uppercase whitespace-nowrap">SEE ALL</div>
      </div>
    <div className="w-full">
      <Slider {...settings} >
       {
        cartData.map((item)=>(
            <div key={item.id} className="flex">
        
            <div className="w-[90%]  bg-gray-200 rounded-md p-4 h-[200px] gap-2  boxCenter  flex-col">
            <img
              alt={item.image}
              src={item.image}
              className=" object-cover rounded-full h-16 w-16 border border-gray-300"
            />
          <div className="w-full truncate boxCenter flex-col gap-[2px]">
          <span className="text-[12px] w-full truncate font-semibold">{item.name} {item.surname}</span>
            <span className="text-[12px] truncate font-semibold text-orange-400">{item.title}</span>
          </div>
          <span className="text-[12px] truncate font-semibold">{item.city}</span>
          <Link to='#' onClick={FollowToggle} className={follow===false?'btnFollowTo':'btnFollow'}>Follow</Link>
  
            </div>
          </div>
        ))
       }
       
       
      </Slider>
    </div>
  </div>
  )
}