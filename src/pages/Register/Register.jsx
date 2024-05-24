import classes from "../Register/Register.module.css";
import {useForm} from "react-hook-form";
//import {apiService} from '../../api/api.axios'
import { useNavigate } from "react-router-dom";
import Header from "../../images/header.jpg";
const Regist = () => {

    const {
        register,
        formState: {errors},
        handleSubmit,
        watch
    } = useForm()

    const navigate = useNavigate()

    const onSubmit = async(data) => {
        const dataUser = {
            phone:data.phone,
            password: data.password,
        }
        console.log(dataUser)
        try {
            const res = await apiService.post('/api/v1/auth/register/admin', dataUser)
            navigate('/login')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div id={classes.form} className="flex_container full-page">
            <div class="container" className={classes.container}>
            <img src={Header} alt ="Header"className={classes.Header}/>
            <span className={classes.text_form}>Регистрация</span>
            </div>
            <form id="flex_container" className={classes.formR} onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="phone"
                    placeholder="Номер телефона"
                    {...register('phone', {required: true})}
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    className={errors.phone && classes.errorInput}
                />
                {errors.mail?.type === 'required' && (
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

                <input
                    type="password"
                    placeholder="Подтвердите пароль"
                    {...register('passwordConfirmation', {
                        required: 'Confirm passwords is required',
                        validate: value =>
                            value === watch('password') || "The passwords do not match"
                    })}
                    aria-invalid={errors.passwordConfirmation ? 'true' : 'false'}
                    className={errors.passwordConfirmation && classes.errorInput}
                />
                {errors.passwordConfirmation && (
                    <p role="alert" className={classes.error}>
                        {errors.passwordConfirmation.message}
                    </p>
                )}
                {/*<p>{errAlert}</p>*/}
                <button type='submit' className={classes.submitButton}>Продолжить</button>
            </form>
        </div>
    );
};

export default Regist;