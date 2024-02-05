//import logo from './logo.svg';
import React, { useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';



function App() {
  const[mode, setMode]=useState('light');
  const[alert, setAlert]=useState(null);



  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>(
      setAlert(null)
    ),3000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#020318';
      showAlert("Drak mode has been enabled","success")

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>

      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Textform showAlert={showAlert} heading="Enter the text to Analyze below" mode={mode}/>
      </div>
      
    </>
  );
}

export default App;
