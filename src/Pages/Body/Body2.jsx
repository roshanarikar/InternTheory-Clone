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
import { SelectionComponent } from "../../Components/Selection/Select"

import "./Body3.css"
import intern1 from "../../Components/images/interships/inter1.jpg"
import intern2 from "../../Components/images/interships/inter2.jpg"
import intern3 from "../../Components/images/interships/inter3.jpg"
import intern4 from "../../Components/images/interships/inter4.jpg"
import intern5 from "../../Components/images/interships/inter5.jpg"
import intern6 from "../../Components/images/interships/inter6.jpg"
import intern7 from "../../Components/images/interships/inter7.jpg"
import intern8 from "../../Components/images/interships/inter8.jpg"
import skill1 from "../../Components/images/interships/skill1.jpg"
import skill2 from "../../Components/images/interships/skill2.jpg"
import skill3 from "../../Components/images/interships/skill3.jpg"
import tree from "../../Components/images/interships/tree.png"
import Corousal from "./Corousal"

export const Body2 = () =>{
    return(
        <div>
            <div id="formBody">
                  <div id="topForm">
                    <p id="getTitle">Let's Get You <span id="ready">  Ready  </span></p>
                    <p id="getStitle">The One Stop to Upgrade Your Resume. Expand Your Skillset. Do An Internship. Get Placed</p>
                  </div>
                  <SelectionComponent/>
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
            <div id="main3">
                <p id="workTitle">LET'S GET SOME <span>WORK EXPERIENCE</span></p>
                <div id="intern">
                    <div className="workCard"><a href=""><img className="img" src={intern1} alt="" /></a></div>
                    <div className="workCard"><a href=""><img className="img" src={intern2} alt="" /></a></div>
                    <div className="workCard"><a href=""><img className="img" src={intern3} alt="" /></a></div>
                    <div className="workCard"><a href=""><img className="img" src={intern4} alt="" /></a></div>
                    <div className="workCard"><a href=""><img className="img" src={intern5} alt="" /></a></div>
                    <div className="workCard"><a href=""><img className="img" src={intern6} alt="" /></a></div>
                    <div className="workCard"><a href=""><img className="img" src={intern7} alt="" /></a></div>
                    <div className="workCard"><a href=""><img className="img" src={intern8} alt="" /></a></div>
                </div>
            </div>
            <div id="main4">
              <div id="skillTitle"><p id="workTitle">HOW ABOUT <span>UPSKILLING ?</span></p></div>
              <div id="skillCard">
                    <div><a href=""><img className="skillC" src={skill1} alt="" /></a></div>
                    <div><a href=""><img className="skillC" src={skill2} alt="" /></a></div>
                    <div><a href=""><img className="skillC" src={skill3} alt="" /></a></div>
              </div>
            </div>
            <div id="main5">
                <div id="left4Item">
                   <a href=""><img id="treeimg" src={tree} alt="" /></a>
                </div>
                <div id="right4Item">
                    <div id="growCont">
                        <div id="headline"><p>WE ARE CONSTANTLY <span>GROWING</span></p></div>
                        <div id="line"></div>
                        <div id="subtitle"><p>We are on a mission to help every student in India. Upgrading your CV and getting you a meaningful job remains our sole motive and we are not stopping anytime soon.</p></div>
                    </div>
                </div>
            </div>
            <div id="main6">
              <div id="corousalItem"><Corousal/></div>
            </div>
        </div>
    )
}