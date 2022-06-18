import { Route, Routes } from "react-router-dom"
import { Footer } from "../Components/Footer/Footer"
import { Navbar } from "../Components/Navbar/Navbar"
import { Interships } from "../Pages/Interships/Intership"
import { Jobs } from "../Pages/Jobs/Jobs"

export const AllRoutes = () =>{
    return(
        <div>
            <Navbar/>
            <Routes>
                {/* <Route path="/" element={<Products/>}/> */}
                <Route path="/interships" element={<Interships/>}/>
                <Route path="/job" element={<Jobs/>}/>
            </Routes> 
            <Footer/>
        </div>
    )
}