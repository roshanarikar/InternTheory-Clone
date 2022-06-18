import { Route, Routes } from "react-router-dom"
import { Footer } from "../Components/Footer/Footer"
import { Navbar } from "../Components/Navbar/Navbar"
import { Body2 } from "../Pages/Body/Body2"
import { Contact } from "../Pages/Contact/Contact"
import { Interships } from "../Pages/Interships/Intership"
import { Jobs } from "../Pages/Jobs/Jobs"

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
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/post"></Route>
                <Route path="/courses"></Route>
                <Route path="/register"></Route>
                <Route path="/login"></Route>
            </Routes> 
            <Footer/>
        </div>
    )
}