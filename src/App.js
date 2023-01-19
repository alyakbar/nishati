import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Catego from './components/Catego/Catego';

function App() {
  return (
    <div className="App">
  <Navbar/>
  <Slider/>
  <Catego/>
    </div>
  );
}

export default App;
