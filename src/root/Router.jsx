import React from 'react';
import Add from '../Bitween/AddInfo/Additionally.jsx';
import Time from '../Bitween/Time/Time.jsx';
import Calendar from '../MainPage/Calendar/Calendar.jsx';
import Chat from '../MainPage/Chat/Chat.jsx';
import { Route, Routes} from "react-router-dom";
// import { useAuth } from "../context/AuthContext.jsx";


const Router = () => {
   
    return (
        <>
  
        <Routes>
            <>
                <Route path={"/add"} element={<Add />}/>
                <Route path={"/time"} element={<Time />}/>
            </>
            <>
                <Route path={"/calendar"} element={<Calendar />}/>
                <Route path={"/chat"} element={<Chat />}/> 
            </>
           
        
        </Routes>
       
        </>


    );
}

export default Router;