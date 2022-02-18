import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="Text Utils" aboutus="About us" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        {/* <About/> */}
        <TextForm heading="Enter text to analyse below" mode={mode} />
      </div>
      
    </>
  );
}

export default App;
