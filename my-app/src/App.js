import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
   <>
   <div><Navbar /></div>
   <div>
   <Carousel /></div>
   <div>
   <Footer /></div>
   </>
  );
}

export default App;
