import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Catego from './components/Catego/Catego';
import Product from './components/Product/Product';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
  <Navbar/>
  <Slider/>
  <Catego/>
  <Product/>
  <Footer/>

    </div>
  );
}

export default App;
