import { useState } from 'react'
import Button from '@mui/material/Button';
import Logo from './images/logo.png';
import Time from './images/time.png';
import Med from './images/image1.png';

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
