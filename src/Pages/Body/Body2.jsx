import "./Body2.css"
import logo1 from "../../Components/images/companies/logo-1.png"
import logo2 from "../../Components/images/companies/logo-2.png"
import logo3 from "../../Components/images/companies/logo-3.png"
import logo4 from "../../Components/images/companies/logo-4.png"
import logo5 from "../../Components/images/companies/logo-6.png"
import logo6 from "../../Components/images/companies/logo-7.png"
import logo7 from "../../Components/images/companies/logo-8.png"
import logo8 from "../../Components/images/companies/logo-9.png"
import logo9 from "../../Components/images/companies/logo-10.png"
import logo10 from "../../Components/images/companies/logo-11.png"
import logo11 from "../../Components/images/companies/logo-12.png"
import logo12 from "../../Components/images/companies/logo-13.png"
import logo13 from "../../Components/images/companies/logo-14.png"
import logo14 from "../../Components/images/companies/logo-15.png"
import logo15 from "../../Components/images/companies/logo-16.png"
import logo16 from "../../Components/images/companies/logo-17.png"
import logo17 from "../../Components/images/companies/logo-18.png"
import logo18 from "../../Components/images/companies/logo-19.png"
import logo19 from "../../Components/images/companies/logo-20.png"
import logo20 from "../../Components/images/companies/logo-21.png"
import { MyComponent } from "../../Components/Selection/Select"

export const Body2 = () =>{
    return(
        <div>
            <div id="formBody">
                  <div id="topForm">
                    <p id="getTitle">Let's Get You <span id="ready">  Ready  </span></p>
                    <p id="getStitle">The One Stop to Upgrade Your Resume. Expand Your Skillset. Do An Internship. Get Placed</p>
                  </div>
                  <div id="bottomForm">
                    <div><MyComponent/></div>
                  </div>
            </div>
            <div id="main">
                <div id="leftItem">
                    <div id="leftContent">
                        <div id="headline"><p>PLETHORA OF OPPORTUNITIES <span>FOR YOU</span></p></div>
                        <div id="line"></div>
                        <div id="subtitle"><p>We are on a mission to connect employers to young talent all over India. With our strong corporate network, it will no longer be a challenge to find the right internship for you</p></div>
                    </div>
                </div>
                <div id="rightItem">
                    <div id="companies">
                        <div><img src={logo1} alt="logo"/></div>
                        <div><img src={logo2} alt="logo"/></div>
                        <div><img src={logo3} alt="logo"/></div>
                        <div><img src={logo4} alt="logo"/></div>
                        <div><img src={logo5} alt="logo"/></div>
                        <div><img src={logo6} alt="logo"/></div>
                        <div><img src={logo7} alt="logo"/></div>
                        <div><img src={logo8} alt="logo"/></div>
                        <div><img src={logo9} alt="logo"/></div>
                        <div><img src={logo10} alt="logo"/></div>
                        <div><img src={logo11} alt="logo"/></div>
                        <div><img src={logo12} alt="logo"/></div>
                        <div><img src={logo13} alt="logo"/></div>
                        <div><img src={logo14} alt="logo"/></div>
                        <div><img src={logo15} alt="logo"/></div>
                        <div><img src={logo16} alt="logo"/></div>
                        <div><img src={logo17} alt="logo"/></div>
                        <div><img src={logo18} alt="logo"/></div>
                        <div><img src={logo19} alt="logo"/></div>
                        <div><img src={logo20} alt="logo"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}