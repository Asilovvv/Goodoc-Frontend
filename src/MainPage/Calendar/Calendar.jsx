import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import classes from './Calendar.module.css';
import battery from '../../assets/Battery.svg';
import wifi from '../../assets/Wifi.svg';
import connection from '../../assets/Cellular Connection.svg';
import pill from '../../assets/Pill.svg';
import bot from '../../assets/Message 33.svg';
import calender from '../../assets/Calender.svg';
import  user from '../../assets/User.svg';


const Calendar = () => {
    // useEffect(() => {
    //     const getData = async() => {
    //         try {
    //             const res = await apiService.get("/bot/chat")
    //             setData(res.data)
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     getData()
    // }, [state])

   

    return(
    <div className={classes.square}>
        <div className={classes.container}>
            <div className={classes.status_bar}>
            <img src={connection}/>
            <img src={wifi}/>
            <img src={battery}/>
            </div>

            <span className={classes.calendar}>Календарь</span>
            <div className={classes.overall}>

                <div className={classes.days}>
                    <div className={classes.number}>16</div>
                    <span className={classes.week}>п</span>
                </div>
                <div className={classes.dayss} >
                    <div className={classes.number}>17</div>
                    <span className={classes.week}>в</span>
                </div>
                <div className={classes.dayss}>
                    <div className={classes.number}>18</div>
                    <span className={classes.week}>с</span>
                </div>
                <div className={classes.dayss}>
                    <div className={classes.number}>19</div>
                    <span className={classes.week}>ч</span>
                </div>
                <div className={classes.dayss}>
                    <div className={classes.number}>20</div>
                    <span className={classes.week}>п</span>
                </div>
            </div>
           <div >
           <h3 className={classes.first_time}>8.00</h3>
           
           <div className={classes.pill_info}>
               <img src={pill} className={classes.image_pill}/>
               <div className={classes.white_line}></div>
               <div className={classes.pill_infoo}>
               <span className={classes.name_pill}>Парацетамол</span>
               <span className={classes.number_pills}>Принять 10 пилюль</span>
               <span className={classes.infoo}>Принято сегодня в 8.00</span>
               </div>
           </div>
           </div>
           <p className={classes.second_time}>12.00</p>

           <div className={classes.pill_info}>
                <img src={pill} className={classes.image_pill}/>
                <div className={classes.white_line}></div>
                <div className={classes.pill_infoo}>
                <span className={classes.name_pill}>Парацетамол</span>
                <span className={classes.number_pills}>Принять 10 пилюль</span>
                <span className={classes.infoo_not}>Еще не принято</span>
                </div>
            </div>
        <button className={classes.add_button}>Добавить лекарство</button>
        <div className={classes.bg}>
            <Link to='/chat'><button className={classes.bot}> <img src={bot}/><div>Бот</div></button></Link>
            <div>
            <a className={classes.calender}><img src={calender}/></a> 
           <span className={classes.calendar_title}>Календарь</span>
            </div>
            <div>
           <a className={classes.frame}><img src={user}/> </a>
           <span className={classes.profile_title}> Профиль</span>
           </div>
        </div>
                <div className={classes.black_line}></div>
            </div>
        </div>
    )
}
export default Calendar;