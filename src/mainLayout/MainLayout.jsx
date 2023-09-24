import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const MainLayout = () => {
    return (
        <div>
            {/* header area here */}
            <Header />
            
            {/* Outlet area here */}
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;