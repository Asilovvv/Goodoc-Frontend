import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { useAuth } from "../../contexts/AuthContext";
import Button from "../LogOutButton/LogOutButton";
const Header = () => {
    const {isAuth, setIsAuth}=useAuth()
    return(

        <section className={classes.form2}> 
            <div className={classes.form3}>   
            {isAuth && <Button/>}
            {!isAuth?
            <>
            <NavLink to ={"/login"}>
                <button className={classes.formLogin }>
                    Login
                </button>
            </NavLink>
            <NavLink to ={"/register"}>
                <button className={classes.formReg}>
                    Register
                </button>
            </NavLink>
            </>
        
            :<>
            </>}
            </div>
        </section> 
    )

}

export default Header;