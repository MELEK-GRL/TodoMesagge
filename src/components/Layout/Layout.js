import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Routers from "../../routes/Routers"

export default function Layout() {
    return (
        <div className="boxCenter w-full flex-col  ">
            <Header />
            <div className="flex mb-8 mt-[60px] w-full h-[3513px];  lg:w-[643px] overflow-hiden ">
                <Routers />
            </div>
            <Footer />
        </div>
    )
}
