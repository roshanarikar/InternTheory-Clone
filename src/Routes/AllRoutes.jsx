import { Route, Routes } from "react-router-dom"
import { Footer } from "../Components/Footer/Footer"
import { Navbar } from "../Components/Navbar/Navbar"
import { Body2 } from "../Pages/Body/Body2"
import { Cart } from "../Pages/Cart/Cart"
import { Contact } from "../Pages/Contact/Contact"
import { Course } from "../Pages/Course/Course"
import { Interships } from "../Pages/Interships/Intership"
import { Jobs } from "../Pages/Jobs/Jobs"
import { Login } from "../Pages/Login/Login"
import { Post } from "../Pages/Post/Post"
import { Register } from "../Pages/Register/Register"

export const AllRoutes = () =>{
    return(
        <div>
            <Navbar/>
            <br />
            <br />
            <br />
            <Routes>
                <Route path="/" element={<Body2/>}/>
                <Route path="/interships" element={<Interships/>}/>
                <Route path="/job" element={<Jobs/>}/>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/post" element={<Post/>}></Route>
                <Route path="/courses" element={<Course/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes> 
            <Footer/>
        </div>
    )
}