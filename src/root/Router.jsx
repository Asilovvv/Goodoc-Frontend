import {Route, Routes} from "react-router-dom";
import Register from "../pages/Register/Register.jsx";
import Login from "../pages/Login/Login.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import Header from "../header/Header.jsx";

const Router = () => {
    const {isAuth,setIsAuth}=useAuth()
    console.log(isAuth)

    return (<>
        <Header/>
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
              
                </>
            }  
            
        </Routes>
    </>
);
};

export default Router;