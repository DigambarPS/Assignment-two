import React from "react";
import "./style.css";
import {Link} from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
    //const location = useLocation();
    //console.log(location.pathname);
    //const[activeLink, setActiveLink] = useState()
    //useEffect(() => {
      //  setActiveLink(location.pathname)
   // }, [location])

    return(
    <>
    <div className="Navbar">
        
        <div className="Navbar-logo">
            <h2>Music-Instruments</h2>
        </div>

        <ul className="Navbar-menu">
            <li>
                <Link to="/">Home</Link>
            </li>
            
            <li>
                <Link to="/Products">Products</Link>
            </li>
            
            <li>
                <Link to="/About">About Us</Link>
            </li>
            
            <li>
                <Link to="/Support">Support</Link>
            </li>
         </ul>
    </div>
    </>
    );
}
export default Navbar;