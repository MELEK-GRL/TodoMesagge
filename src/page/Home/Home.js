import React from "react";
import Todos from "../../components/UI/Todos";
import Cart from "../../components/UI/Cart";
import CartTheme from "../../components/UI/CartTheme";
import Sliders from "../../components/UI/Sliders";
import Containers from "../../components/UI/Containers";
import Slide from "../../components/UI/Slide";

export default function Home() {
  return (
    <div className="flex flex-col w-full ">
     
      <div className="flex w-full lg:px-0  px-3  justify-between flex-col lg:flex-row ">
        <div className="flex w-full lg:w-[66%] gap-6 flex-col">
          <Todos />
          <CartTheme />
          <Sliders />
          <Cart />
        </div>
        <div className="w-full lg:w-[26%] flex-col flex gap-6 lg:gap-44">
          <Containers />
          <Slide />
        </div>
      </div>
    </div>
  );
}