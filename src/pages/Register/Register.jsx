import classes from "../Register/Register.module.css";
import {useForm} from "react-hook-form";
import {apiService} from '../../api/api.axios';
import { NavLink, useNavigate } from "react-router-dom";
import Registr from "../../images/registr.jpg";
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
            phone:data.number,
            password: data.password,
        }
        console.log(dataUser)
        try {
            const res = await apiService.post('/auth/register', dataUser)
            navigate('/login')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div id={classes.form} className="flex_container full-page">
            <img src={Registr} alt ="Registr"className={classes.Registr}/>
            <form id="flex_container" className={classes.formR} onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="number"
                    placeholder="Номер телефона"
                    {...register('number', {required: true})}
                    aria-invalid={errors.number? 'true' : 'false'}
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

                <input
                    type="password"
                    placeholder="Подтвердите пароль"
                    {...register('passwordConfirmation', {
                        required:'Поле не заполнено',
                        validate: value =>
                            value === watch('password') || "Пароль не соответствует"
                    })}
                    aria-invalid={errors.passwordConfirmation ? 'true' : 'false'}
                    className={errors.passwordConfirmation && classes.errorInput}
                />
                {errors.passwordConfirmation && (
                    <p role="alert" className={classes.error}>
                        {errors.passwordConfirmation.message}
                    </p>
                )}
                <button type='submit' className={classes.submitButton}>Продолжить</button>
                {/*<p>{errAlert}</p>*/}
            </form>
            
        </div>
    );
};

export default Regist;