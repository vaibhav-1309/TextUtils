import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=> {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(1,17,69)';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
    {/* <Navbar/> */}
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
    <div className='container my-3'>
    <Routes>
      <Route path="/about" element={<About/>}/>
    </Routes>
    <Routes>
      <Route 
        exact path="/" 
        element={
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}
          />
        }
        />
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
