import classes from "./Login.module.css";
import {useForm} from "react-hook-form";
import Google from "../../images/google.jpg"
import Facebook from "../../images/facebook.jpg"
import Apple from "../../images/apple.jpg";
import {apiService} from '../../api/api.axios';
import {useAuth} from '../../context/AuthContext';
import { NavLink, useNavigate } from "react-router-dom";
import Enter from "../../images/enter.jpg";
const Login = () => {

    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm()

    const {isAuth,setIsAuth}=useAuth()

    const navigate = useNavigate()

    const onSubmit = async(data) => {
        const dataUser = {
            number: data.number,
            password: data.password
        }
        console.log(dataUser) 
        try {
            const res = await apiService.post('/auth/login', dataUser)
            localStorage.setItem('token',res.data.access_token)
            setIsAuth(res.data.access_token)
            console.log(isAuth)
            console.log(res);
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div id={classes.form} className="flex_container full-page">
            <img src={Enter} alt ="Enter"className={classes.Enter}/>
                <form id="flex_container" className={classes.formR} onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="number"
                    placeholder="Номер телефона"
                    {...register('number', {required: true})}
                    aria-invalid={errors.number ? 'true' : 'false'}
                    className={errors.number && classes.errorInput}
                />
                {errors.number?.type === 'required' && (
                    <p className={classes.error} role="alert">
                        Поле не заполнено
                    </p>
                )}
                <input
                    type="password"
                    placeholder="Пароль"
                    {...register('password', {required: true})}
                    aria-invalid={errors.password ? 'true' : 'false'}
                    className={errors.password && classes.errorInput}
                />
                {errors.password?.type === 'required' && (
                    <p role="alert" className={classes.error}>
                        Поле не заполнено
                    </p>
                )}
                <span  type='submit'className={classes.ForgotPassword}>Забыли пароль?</span>
                <button type='submit' className={classes.submitButton}>Продолжить</button>
                <button type='submit' className={classes.asGuest}>Войти как гость</button>
                <NavLink to={"/register"}>
                <button type='submit' className={classes.Regist}>Регистрация</button>
                </NavLink>
                <button  type='submit'className={classes.openWith}>Войти с помощью</button>
                <img src={Google} alt ="Google"className={classes.Google}/>
                <img src={Facebook} alt ="Facebook"className={classes.Facebook}/>
                <img src={Apple} alt ="Apple"className={classes.Apple}/> 
                {/*<p>{errAlert}</p>*/}
            </form>
              
        </div>
        
    );
};

export default Login;