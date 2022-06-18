import React, { useEffect } from "react";
import { fetchData1 } from "../../Redux/jobs/action";
import { useSelector, useDispatch } from "react-redux";
import "./Jobs.css";
import shareicon from "../../Components/images/interships/shareicon.png";

export const Jobs = () => {
  const jobs = useSelector((store) => store.ecommerceData.products);
  console.log(jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    if (jobs?.length === 0) {
      dispatch(fetchData1());
    }
  }, [dispatch, jobs?.length]);

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
jobs.jobs?.map((item) => (
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
      <div className="stipend">Salary : {item.salary}</div>
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

// { "id": 1, "image": "https://assets.interntheory.com/uploads/company/logos/5e4aa4f62ecc23200708c5cf0d542f7ee1345362.jpg", 
//             "role": "Digital Marketing", 
//             "company": "arham labs",
//             "work" : "Digital Marketing", 
//             "location" : "Mumbai", "salary": "50000 - 65000 per month", 
//             "duration" : "4 Weeks left"
//         },