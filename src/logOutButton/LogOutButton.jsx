import {useAuth} from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import classes from "./LogOutButton.module.css"
 const Button =()=>{

    const{isAuth,setIsAuth}=useAuth()
    const navigate = useNavigate()
    const logOut =()=>{
        localStorage.removeItem('token')
        setIsAuth(null)
        navigate('/login')
    }

    return(
        <section>
            <button className={classes.form1}
            onClick={()=>logOut()}>LogOut</button>
        </section>
    )
}
 export default Button