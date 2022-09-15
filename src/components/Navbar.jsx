import React from "react";
import Logo from "../assets/images/logo.jpg"
import "./style.css";
import {Link, useLocation, useNavigate}  from "react-router-dom";
import {useEffect, useState} from "react";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const[activeLink, setActiveLink] = useState("/")
    const goToHome = () => {
        navigate("/")
    }
    useEffect(() => {setActiveLink(location.pathname)}, [location])
    return(
    <>
    <div className="navbar">
        <div className="logo" onClick={goToHome}>
            <img src={Logo} alt=""/>

            <ul className="menu">
                <li className={activeLink === '/' ? "active" : ""}>
                    <Link to={'/'}>Home</Link>
                </li>
            
                <li className={activeLink === '/products' ? "active" : ""}>
                    <Link to={'/products'}>Products</Link>
                </li>
            
              <li className={activeLink === '/about' ? "active" : ""}>
                 <Link to={'/about'}>About</Link>
             </li>
            
               <li className={activeLink === '/support' ? "active" : ""}>
                   <Link to={'/support'}>Support</Link>
               </li>
            </ul>
         </div>
    </div>
    </>
    );
}
export default Navbar;