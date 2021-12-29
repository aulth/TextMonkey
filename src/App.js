import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState('Dark');
  const [alert, setAlert] = useState(null);
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      setModeText('Light');
      showAlert('success', 'Dark mode enabled');
      document.body.style.backgroundColor = '#222831';
    }
    else{
      setMode('light');
      setModeText('Dark');
      showAlert('success', 'Light mode enabled');
      document.body.style.backgroundColor = 'white';
    }
  }
  const showAlert = (type, message)=>{
    setAlert({
      type:type,
      msg:message
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1800);
  }
    return (
    <>
    <Router>
    <Navbar showAlert={showAlert} title='TextMonkey' aboutText='About' modeText={modeText} mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-1">
          <Routes>
            <Route path='/' element={
              <TextForm showAlert={showAlert} heading='Try TextMonkey - Word counter, Character counter, Remove Extra spaces' mode={mode}/>
            } ></Route>
            <Route path="/about" element={<About appName='TextMonkey' mode={mode} />}>
            </Route>
          </Routes>
    </div>
    <Footer mode={mode}/>
    </Router>
    </>
  );
}

export default App;

