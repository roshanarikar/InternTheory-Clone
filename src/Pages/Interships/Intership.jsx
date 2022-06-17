import "./Intership.css"
import { useDispatch, useSelector } from "react-redux"

export const Intership = () => {
    const dispatch = useDispatch()
    const product = useSelector((state) => state.todos)
    return(
        <div id="InterPage">
           <div id="InImg">
            <img id="interImg" src="https://assets.interntheory.com/creative/Internship_left_course_add_01.png" alt="" srcset="" />
           </div>
           <div id="cards">
             <div><p>Fresher Job Jobs</p></div>
              {
                product?.map((item)=>(
                    <div key={item.id}>
                        <p>{item.id}</p>
                        <p>{item.role}</p>
                    </div>
                ))
              }
           </div>
        </div>
    )
}