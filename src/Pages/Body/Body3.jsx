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

export const Body3 = () =>{
    return(
        <div>
            <div id="main3">
                <p id="workTitle">LET'S GET SOME <span>WORK EXPERIENCE</span></p>
                <div id="intern">
                    <div><a href=""><img className="img" src={intern1} alt="" /></a></div>
                    <div><a href=""><img className="img" src={intern2} alt="" /></a></div>
                    <div><a href=""><img className="img" src={intern3} alt="" /></a></div>
                    <div><a href=""><img className="img" src={intern4} alt="" /></a></div>
                    <div><a href=""><img className="img" src={intern5} alt="" /></a></div>
                    <div><a href=""><img className="img" src={intern6} alt="" /></a></div>
                    <div><a href=""><img className="img" src={intern7} alt="" /></a></div>
                    <div><a href=""><img className="img" src={intern8} alt="" /></a></div>
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
                    <div>
                        <div id="headline"><p>WE ARE CONSTANTLY <span>GROWING</span></p></div>
                        <div id="subtitle"><p>We are on a mission to help every student in India. Upgrading your CV and getting you a meaningful job remains our sole motive and we are not stopping anytime soon.</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}