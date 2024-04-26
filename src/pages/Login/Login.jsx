import classes from "./Login.module.css";
import {useForm} from "react-hook-form";
//import {apiService} from '../../api/api.axios';
import {useAuth} from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";
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
            email: data.mail,
            password: data.password
        }
        console.log(dataUser)
        try {
            const res = await apiService.post('/api/v1/auth/authenticate', dataUser)
            localStorage.setItem('token',res.data.access_token)
            setIsAuth(res.data.access_token)
            console.log(isAuth)
            console.log(res);
            navigate('/mainPage')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div id={classes.form} className="flex_container full-page">
            <span className={classes.text_form}>Authentification</span>
            <form id="flex_container" className={classes.formR} onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="phone"
                    placeholder="Номер телефона"
                    {...register('number', {required: true})}
                    aria-invalid={errors.number ? 'true' : 'false'}
                    className={errors.mail && classes.errorInput}
                />
                {errors.number?.type === 'required' && (
                    <p className={classes.error} role="alert">
                        Поле не заполнено
                    </p>
                )}


                <input
                    type="Пароль"
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
                {/*<p>{errAlert}</p>*/}
                <button type='submit' className={classes.submitButton}>Продолжить</button>
            </form>
                <button type='submit' className={classes.asGuest}>Войти как гость</button>
        </div>
    );
};

export default Login;