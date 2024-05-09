import { Outlet } from "react-router-dom";
import Navbar from "../Components/HaddderFooter/Navbar";
import Footer from "../Components/HaddderFooter/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;