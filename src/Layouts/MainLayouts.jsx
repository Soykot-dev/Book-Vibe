import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar/NavBar";
import Footer from "../Components/Shared/Footer/Footer";

const MainLayouts = () => {
    return (
        <div>
            <div className="h-20">
                <NavBar />
            </div>
            <div className="max-w-screen-xl mx-auto ">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayouts;