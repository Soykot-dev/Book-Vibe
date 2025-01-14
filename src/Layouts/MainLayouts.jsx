import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar/NavBar";
import Footer from "../Components/Shared/Footer/Footer";

const MainLayouts = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayouts;