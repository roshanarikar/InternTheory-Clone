import Button from "../../Components/Navbar/Button";
import { redButton } from "../../Components/Button/Button1";
import "./Contact.css"

export const Contact = () => {
  return (
    <div>
      <div id="contactPage">
        <div id="leftContact">
          <div><h1>Contact</h1></div>
          <div id="says">
            Have something to say? Give us a holler through any one of the ways
            below, and we’ll get back within 24 hours. On a side note, like the
            rest around us, we have fallen victims to Social Media. Feel free to
            get in touch on Facebook, LinkedIn or Instagram anytime!
          </div>
          <br />
          <div><input type="text" placeholder="Email Address"/></div>
          <div><input type="text" placeholder="Mobile no"/></div>
          <div><input type="text" placeholder="Subject"/></div>
          <div><input type="text"  placeholder="Message"/></div>
          <button style={{margin:"auto"}} id="signinBtn">Submit</button>
        </div>
       <div id="rightPage">
       
       </div>
      </div>
    </div>
  );
};
