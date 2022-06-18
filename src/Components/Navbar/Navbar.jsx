import logo from "../images/logo.png"
import cart from "../images/cart.png"
import "./navbar.css"
import Button from "./Button"
import { useState } from "react"
import SideNav from "./SideNav"

export const Navbar = () =>{
    const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

    return (
        <div>
           <SideNav isOpen={sidebarOpen}/> 
            <div className="main">
            <div id="leftNav">
                <div>
                <Button onClick={handleViewSidebar} />
                </div>
                <div><a href=""><img id="logoimg" src={logo} alt="logo" srcset=""/></a></div>
            </div>
            <div id="rightNav">
                <div><a href=""><img id="cartimg" src={cart} alt="cart" srcset=""/></a></div>
                <div><button id="signinBtn">SIGN IN</button></div>
            </div>
            </div>
        </div>
    )
}
