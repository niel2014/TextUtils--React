import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
 
  const toggleMode = () =>{
     if(mode == 'light')
     {
      setMode('dark');
      document.body.style.backgroundColor = "rgb(43 51 73)";
      showAlert('Dark mode has been enabled','success');
     }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert('Light mode has been enabled','success');
     }
  }
  return (
    <div className="App">
      <Navbar title="TextUtils" home="Home" about="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
          <Alert alert={alert}/>
          <Textform heading="Enter text to analyse"  mode={mode} showAlert={showAlert} />
      </div>
    </div>
  );
}

export default App;
