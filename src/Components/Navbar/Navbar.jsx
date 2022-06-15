import logo from "../images/logo.png"
import cart from "../images/cart.png"
import "./navbar.css"

export const Navbar = () =>{
    return (
        <div>
            <div className="main">
            <div id="leftNav">
                <div>Toggle</div>
                <div><img id="logoimg" src={logo} alt="logo" srcset=""/></div>
            </div>
            <div id="rightNav">
                <div><a href=""><img id="cartimg" src={cart} alt="cart" srcset=""/></a></div>
                <div><button id="signinBtn">SIGN IN</button></div>
            </div>
            </div>
        </div>
    )
}