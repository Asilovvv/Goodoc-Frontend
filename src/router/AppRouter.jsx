import {Route, Routes} from "react-router-dom";
import Main from "../pages/Main.jsx";
import Register from "../pages/Register.jsx";
import Between from "../pages/Between.jsx";
import Login from "../pages/Login.jsx";



function AppRouter () {
    return (
        <Routes>

          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/between" element={<Between />} />

        </Routes>

    )
}

export default AppRouter