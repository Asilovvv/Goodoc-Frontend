import React from 'react';
import classes from './Additionally.module.css';
import progress from '../../assets/Progress Status-2.svg';

const Date = () => {
    return (
       <div className={classes.square}>
    <div className={classes.container}>
        <div className={classes.block}>
        <img src={progress} className={classes.img_time}/>
                    <div className={classes.time_info}>
                    <span className={classes.time_title}>Дополнительно</span>
                    <p className={classes.p_info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
        </div>
          <div className={classes.blue_container}>
          <span className={classes.title_pill}>Почти готово. Хотели бы вы:</span>
         <div className={classes.buttons}>
         <button>Установить продолжительность лечения?</button>
         <button>Получать напоминания о пополнении лекарств?</button>
         <button>Добавить инструкции?</button>
         <button>Изменить знакчок лекарства?</button>
         </div>
          </div>    
    </div>
       </div>
    )
}
export default Date;