import React, { useEffect } from "react";
import { fetchData } from "../../Redux/Interships/action";
import { useSelector, useDispatch } from "react-redux";
import "./Intership.css";
import shareicon from "../../Components/images/interships/shareicon.png";

export const Interships = () => {
  const products = useSelector((store) => store.ecommerceData.products);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch, products?.length]);

  return (
    <div id="InterPage">
      <div id="InImg">
        <img
          id="interImg"
          src="https://assets.interntheory.com/creative/Internship_left_course_add_01.png"
          alt=""
          srcset=""
        />
      </div>
      <div id="cards">
        <div>
          <p>Fresher Job Jobs</p>
        </div>
        {
products.map((item) => (
    <div key={item.id}>
        <div>
  <div className="OneCard">
    <div>
      
      <img
        className="imgCard"
        src={item.image}
        alt=""
      />
    </div>
    <div className="companyDetails">
      <div className="role">{item.role}</div>
      <div className="company">{item.company}</div>
      <div className="work">{item.work}</div>
      <div className="location">{item.location}</div>
      <div className="stipend">Stipend : {item.stipend}</div>
    </div>
    <div className="duration">
      <div className="time">{item.duration}</div>
      <div className="sharediv">
        <a href="">
          <img className="shareicon" src={shareicon} alt="" />
        </a>
      </div>
      <a href="">
        <div className="view">VIEW AND APPLY</div>
      </a>
    </div>
  </div>
  <hr />
</div>
    </div>
))
}
      </div>
    </div>
  );
};

// {
//     products.map((item)=>(
//         <div key={item.id}>
//             <p>{item.id}</p>
//             <p>{item.role}</p>
//         </div>
//     ))
//   }



// <div>
//   <div className="OneCard">
//     <div>
      
//       <img
//         className="imgCard"
//         src="https://assets.interntheory.com/uploads/company/logos/779b8e3089a98aca67cac02404e06c8bc9ceb4fd.jpg"
//         alt=""
//       />
//     </div>
//     <div className="companyDetails">
//       <div className="role">Sales Officer</div>
//       <div className="company">Laugh Out Loud Ventures</div>
//       <div className="work">Part Time,Work From Home Internship Marketing</div>
//       <div className="location">Mumbai,Bangalore,Delhi</div>
//       <div className="stipend">Stipend : 3000 - 6000 per month</div>
//     </div>
//     <div className="duration">
//       <div className="time">4-6 Weeks left</div>
//       <div className="sharediv">
//         <a href="">
//           <img className="shareicon" src={shareicon} alt="" />
//         </a>
//       </div>
//       <a href="">
//         <div className="view">VIEW AND APPLY</div>
//       </a>
//     </div>
//   </div>
//   <hr />
// </div>
