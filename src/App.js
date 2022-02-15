import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Text Utils" aboutus="About us" />
      <div className="container">
        <TextForm heading="Enter text to analyse below"/>
      </div>
      
    </>
  );
}

export default App;
