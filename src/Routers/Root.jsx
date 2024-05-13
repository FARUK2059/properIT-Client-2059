import { Outlet } from "react-router-dom";
import Navbar from "../Components/HaddderFooter/Navbar";
import Footer from "../Components/HaddderFooter/Footer";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ToastContainer />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;