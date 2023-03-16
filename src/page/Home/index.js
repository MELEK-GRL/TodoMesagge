import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
export default function index() {
  return (
    <div className="boxCenter w-full flex-col  ">
      <Header />
     <div className="flex mb-8 mt-[60px] w-full h-[3513px];  lg:w-[643px] overflow-hiden ">
     <Outlet />
     </div>
      {/* <Footer /> */}
    </div>
  );
}