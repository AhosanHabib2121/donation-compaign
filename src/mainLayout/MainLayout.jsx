import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";

const MainLayout = () => {
    return (
        <div >
            {/* header area here */}
            <Header />
            {/* Outlet area here */}
            <div >
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;