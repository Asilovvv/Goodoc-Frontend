import {Route, Routes} from "react-router-dom";
import Main from "../pages/Main.jsx";
import Register from "../pages/Register.jsx";
import Between from "../pages/Between.jsx";
import Login from "../pages/Login.jsx";
import Chat from "../MainPage/Chat/Chat.jsx";
import React from "react";



function AppRouter () {
    return (
        <Routes>

          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/between" element={<Between />} />
            <Route path={"/chat"} element={<Chat />}/>
        </Routes>

    )
}

export default AppRouter