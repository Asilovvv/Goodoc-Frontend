import {Route, Routes} from "react-router-dom";
import Main from "../pages/Main.jsx";

import Between from "../pages/Between.jsx";

import Chat from "../MainPage/Chat/Chat.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";




function AppRouter () {
    return (
        <Routes>

          <Route path="/" element={<Main />} />
           <Route path={"/register"} element={<Register/>}/>
          <Route path={"/login"} element={<Login/>}/>
          <Route path="/between" element={<Between />} />
            <Route path={"/chat"} element={<Chat />}/>
        </Routes>

    )
}

export default AppRouter