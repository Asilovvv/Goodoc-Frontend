import React from "react" ;
import classes from './Time.module.css';
import time from '../../assets/TimeStatus.svg';
import { useState } from 'react';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
const Time =  () => {
    const [value, onChange] = useState(null);
    return(
        <div className={classes.square}>
             <div className={classes.block}>
        <img src={time} className={classes.img_time}/>
                    <div className={classes.time_info}>
                    <span className={classes.time_title}>Дополнительно</span>
                    <p className={classes.p_info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
        </div>
         <div className={classes.blue_container}>
          <div className={classes.hiden_info}>
            <span>примите <span className={classes.word_word}>1 Таблетка</span>(-и\-ок)</span>
          </div>
       <TimePicker  onChange={onChange} value={value} className={classes.time_picker}></TimePicker>
          </div>    
    </div>
    )
}

export default Time;

