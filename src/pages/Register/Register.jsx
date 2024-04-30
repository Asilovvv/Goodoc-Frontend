import classes from "../Register/Register.module.css";
import {useForm} from "react-hook-form";
//import {apiService} from '../../api/api.axios'
import { useNavigate } from "react-router-dom";
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
            <img src={Registr} alt ="Registr"className={classes.Registr}/>
            <form id="flex_container" className={classes.formR} onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="phone"
                    placeholder="Номер телефона"
                    {...register('phone', {required: true})}
                    aria-invalid={errors.phone ? 'true' : 'false'}
                    className={errors.phone && classes.errorInput}
                />
                {errors.phone?.type === 'required' && (
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
                        required: 'Поле не заполнено',
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
                <button type='submit' className={classes.submitButton}>Продолжить</button>
                {/*<p>{errAlert}</p>*/}
            </form>
            
        </div>
    );
};

export default Regist;