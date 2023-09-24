import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const MainLayout = () => {
    return (
        <div >
            {/* header area here */}
            <Header />
            
            {/* Outlet area here */}
            <div className="mx-24">
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;