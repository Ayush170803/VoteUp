import { Outlet } from "react-router-dom";
import NavBar from "../utils/NavBar";
import Footer from "../utils/Footer";

const Container = () =>
    {
        return(
            <>
            <NavBar/>
            <Outlet/>
            <Footer/>
            </>
        );
    }
    export default Container;