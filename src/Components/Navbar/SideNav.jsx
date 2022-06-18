
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

const SideNav = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  return (
    <div id="mySidepanel" className={sidebarClass}>
        <a href="/interships">AAG</a>
      <div><Link to="/">
        <div>
            <div style={{color:"black"}} className="NavTitle">Home</div>
        </div></Link> 
      </div>
      <div><Link to="/interships"><div>
            <div style={{color:"black"}} className="NavTitle">Intership</div>
        </div></Link></div>
      <div><Link to="job"><div>
            <div style={{color:"black"}} className="NavTitle">Jobs</div>
        </div></Link></div>
      <div><Link to="post"><div>
            <div style={{color:"black"}} className="NavTitle">Post Intership</div>
        </div></Link></div>
      <div><Link to="courses"><div>
            <div style={{color:"black"}} className="NavTitle">Courses</div>
        </div></Link></div>
      <div><Link to="contact"><div>
            <div style={{color:"black"}} className="NavTitle">Contact Us</div>
        </div></Link></div>
      <div><Link to="register"><div>
            <div style={{color:"black"}} className="NavTitle">Register</div>
        </div></Link></div>
      <div><Link to="login"><div>
            <div style={{color:"black"}} className="NavTitle">Login</div>
        </div></Link></div>
    </div>
  );
};
export default SideNav;


