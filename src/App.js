import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
      setAlert({msg, type});
      setTimeout(() => {
        setAlert(null);
      },2000)
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode enable', 'warning');
    }else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enable', 'success');
    }
  }
  return (
    <>
      <Navbar title="Text Utils" aboutus="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        {/* <About/> */}
        <TextForm heading="Enter text to analyse below" showAlert={showAlert} mode={mode} />
      </div>
      
    </>
  );
}

export default App;
