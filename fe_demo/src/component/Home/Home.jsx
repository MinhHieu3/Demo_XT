import './Home.css';
import Navbar from "../Navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer.jsx";

export default function Home() {
    return(
        <>
        <div className="container">
            <div className="container_navbar">
                <Navbar></Navbar>
            </div>
            <div className="container_body">
                <Outlet></Outlet>
            </div>
            <div className="container_foodter">
                <Footer></Footer>
            </div>
        </div>

        </>
    )
}