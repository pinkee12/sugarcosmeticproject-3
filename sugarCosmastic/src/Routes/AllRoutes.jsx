import { Route, Routes,Link } from "react-router-dom"
import Home from "../components/Home"
import Login from "../components/Login"
import Cart from "../components/Cart"
function AllRoutes(){
    return(
        <>
        <Link to="/"></Link>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
        </>
        
    )
}
export default AllRoutes