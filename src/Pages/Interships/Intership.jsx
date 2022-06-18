import React, {useEffect} from 'react';
import "./Intership.css"
import { useSelector, useDispatch } from "react-redux"
import { fetchData } from '../../Redux/Products/action';

export const Intership = () => {
    const products = useSelector((store) => store.ecommerceData.products);
    console.log(products)
    const dispatch = useDispatch()
  
    useEffect(() =>{
        if(products?.length ===0){
            dispatch(fetchData())
        }
    }, [dispatch, products?.length])
    
    
    return(
        <div id="InterPage">
    {
     products.map((item)=>(
         <div key={item.id}>
             <p>{item.id}</p>
             <p>{item.role}</p>
         </div>
     ))
    }
        </div>
    )
}


// <div id="InImg">
// <img id="interImg" src="https://assets.interntheory.com/creative/Internship_left_course_add_01.png" alt="" srcset="" />
// </div>
// <div id="cards">
//  <div><p>Fresher Job Jobs</p></div>
  
//   {/* {
//     products.map((item)=>(
//         <div key={item.id}>
//             <p>{item.id}</p>
//             <p>{item.role}</p>
//         </div>
//     ))
//   } */}
  
// </div>