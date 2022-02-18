import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  return (
    <>
      <Navbar title="Text Utils" aboutus="About us" />
      <div className="container">
        {/* <About/> */}
        <TextForm heading="Enter text to analyse below"/>
      </div>
      
    </>
  );
}

export default App;
