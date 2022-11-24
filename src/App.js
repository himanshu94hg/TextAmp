import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Conversions from './components/Conversions';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

const App = () => {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {

    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042745'
      showAlert('Dark mode enabled', 'success')
      
    } 
    else {
      setMode('light')
      document.body.style.backgroundColor = '#fff'
      showAlert('Light mode enabled', 'success')
      
    }

  }

  return (
    <>
    <BrowserRouter>
    <Navbar title="TextAmplify" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <Routes>
    
      <Route exact path="/Conversions" element={<Conversions showAlert={showAlert} mode={mode} toggleMode={toggleMode}/>}/>
      <Route exact path="/About" element={<About mode={mode} toggleMode={toggleMode}/>}/>
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode} toggleMode={toggleMode}/>}/>
      
    </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
