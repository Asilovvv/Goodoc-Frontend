
import './App.css'
import AppRouter from "./router/AppRouter.jsx";
import './App.css'
import Router from './root/Router';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
      <AppRouter/>
      {/*<AuthProvider>*/}
      {/*  /!*<Router/>*!/*/}

      {/*</AuthProvider>*/}
    </>
  )

}
export default App
