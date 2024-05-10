import {Route, Routes} from "react-router-dom";
import Register from "../pages/Register/Register.jsx";
import Login from "../pages/Login/Login.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import Frequency from "../pages/between/page3/Frequency.jsx"
import NextDose from "../pages/between/page4/NextDose.jsx";

const Router = () => {
    const {isAuth,setIsAuth}=useAuth()
    console.log(isAuth)

    return (<>

        <Routes>
            {!isAuth?
                <>
                    <Route path={"/register"} element={<Register />}/>
                    <Route path={"/login"} element ={<Login/>}/>
                </>
                :
                <>
                    <Route path={"/register"} element={<Register />}/>
                    <Route path={"/login"} element ={<Login/>}/>
                    <Route path={"/page3"} element ={<Frequency/>}/>
                    <Route path={"/page4"} element ={<NextDose/>}/>
              
                </>
            }  
            
        </Routes>
    </>
);
};

export default Router;