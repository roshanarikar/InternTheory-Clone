import Courseimg from "../../Components/images/interships/coursesPage.png";
import "./Course.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchData3 } from "../../Redux/Course/action";
import { useEffect } from "react";

export const Course = () => {
    const course = useSelector((store) => store.ecommerceData.products);
    console.log(course);
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (course?.length === 0) {
        dispatch(fetchData3());
      }
    }, [dispatch, course?.length]);

  return (
    <div>
      <div>
        <img id="courseImg" src={Courseimg} alt="Image" />
      </div>
      <div id="CourseBg">
        <div id="CourseItem">
          <div id="Certi">Certified Online Courses</div>
          <div  id="DetCert">
            Upgrade your skills with Intern Theory's online learning platform.
            Enrol for any certified online courses and get a step ahead of
            competition. Select from a range of skill based online courses and
            kickstart your career.
          </div>
          <div id="courseCard">
           {
            course.course?.map((item) => (
                <div key={item.id} className="CCard">
                    <div><img className="courseImg" src={item.image} alt="" /></div>
                    <div className="courseTitle">{item.name}</div>
                    <div className="courseSubTitle">{item.details}</div>
                    <hr />
                    <div className="priceBox">
                        <div className="originalPrice">{item.price}</div>
                        <div className="cutPrice">{item.cutPrice}</div>
                    </div>
                    <div>{item.EMI}</div>
                    <div className="CartBox">
                        <div className="Know1" ><a  className="Know" href="">KNOW MORE</a></div>
                        <div><button id="signinBtn" style={{width:"110px"}}>ADD TO CART</button></div>
                    </div>
                </div>
            ))
           }
          </div>
        </div>
      </div>
    </div>
  );
};
