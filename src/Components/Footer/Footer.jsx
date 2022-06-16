import "./Footer.css"
import  fb  from "../images/fb.png"
import  ig  from "../images/ig.png"
import  ld  from "../images/linkedin.png"
import  tw  from "../images/twitter.png"

export const Footer = () =>{
    return (
        <div>
            <div id="footerMain">
                <div id="content">
                    <div id="topItem">
                        <div id="social">
                            <a href=""><img src={fb} alt="" /></a>
                            <a href=""><img src={ld} alt="" /></a>
                            <a href=""><img src={tw} alt="" /></a>
                            <a href=""><img src={ig} alt="" /></a></div>
                        <div id="byFooter">
                                <p>BY PLACE</p>
                                <div id="line"></div>
                                <p>Interships In Mumbai</p>
                                <p>Interships In Delhi</p>
                                <p>Interships In Bangalore</p>
                                <p>Interships In Pune</p>
                                <p>Interships In Hyderabad</p>
                            
                        </div>
                        <div id="byFooter">
                                <p>BY PROFILE</p>
                                <div id="line"></div>
                                <p>Marketing Interships</p>
                                <p>Business Development Interships</p>
                                <p>Content Writing Interships</p>
                                <p>Graphic Designing Interships</p>
                                <p>HR Interships</p>
                                <p>Engineering Intership</p>
                        </div>
                        <div id="byFooter">
                                <p>BY TYPE</p>
                                <div id="line"></div>
                                <p>Full Time Interships</p>
                                <p>Part Time</p>
                                <p>Work From Home Interships</p>
                        </div>
                    </div>
                    <div id="bottomItem">
                        <div id="refund"><a href=""><p>REFUND & CANCELLATION POLICY</p></a><a href=""><p>COURSES</p></a>
                        <a href=""><p>TERMS AND CONDITIONS</p></a><a href=""><p>PRIVACY POLICY</p></a>
                        <a href=""><p>CONTACT US</p></a><a href=""><p>ABOUT US</p></a><a href=""><p>SITE MAP</p></a></div>
                        <div id="line"></div>
                        <div id="company"><p>©2015-2022 INTERNTHEORY. ALL RIGHTS RESERVED.</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}