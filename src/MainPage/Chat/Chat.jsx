import classes from './Chat.module.css';
import React, { useState } from 'react';
import battery from '../../assets/Battery.svg';
import wifi from '../../assets/Wifi.svg';
import send from '../../assets/Send.svg';
import connection from '../../assets/Cellular Connection.svg';
import calender from '../../assets/Calender.svg';
import bot from '../../assets/Message2.svg';
import user from '../../assets/User.svg';
import { Link } from 'react-router-dom';



const Chat = () => {


    return (
        <div className={classes.square}>
            <div className={classes.container}>
                <div className={classes.status_bar}>
                    <img src={connection} />
                    <img src={wifi} />
                    <img src={battery} />
                </div>

                <span className={classes.calendar}>Чат</span>
                <span className={classes.ask_bot}>Спросите совет у бота</span>

                <div className={classes.wrapper}>
                    <form>

                        <input className={classes.request} type='text' placeholder='Введите запрос' />
                        <button className={classes.input_send}><img className={classes.send_photo} src={send} /></button>

                    </form>
                </div>
                <div className={classes.bg}>
                    <Link to='/chat'><button className={classes.bot}> <img src={bot} /><div>Бот</div></button></Link>
                    <div>
                        <a className={classes.calender}><img src={calender} /></a>
                        <span className={classes.calendar_title}>Календарь</span>
                    </div>
                    <div>
                        <a className={classes.frame}><img src={user} /> </a>
                        <span className={classes.profile_title}> Профиль</span>
                    </div>
                </div>
                <div className={classes.black_line}></div>

            </div>



            {/* <div style={{position:'relative',height:"800px" ,width:'700px'}}>
            <MainContainer>
                <ChatContainer>
                    <MessageList>
                        {messages.map((message,i) =>{
                            return <Message key={i} model={message}/>
                        })}
                    </MessageList>
                    <MessageInput placeholder='Type message here' onSend={andleSend}/>
                </ChatContainer>
            </MainContainer>
        </div> */}



        </div>
    )
}
export default Chat;