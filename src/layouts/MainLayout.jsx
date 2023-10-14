import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className="mx-auto">
                <Outlet />
            </div>
            <Footer/>
            
        </div>
    );
};

export default MainLayout;