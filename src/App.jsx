import './App.css'
import Router from './root/Router';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <>
      
      <AuthProvider>
        <Router/>
      </AuthProvider>
     {/* <div>hello world</div> */}
    
    </>
  )

}
export default App
