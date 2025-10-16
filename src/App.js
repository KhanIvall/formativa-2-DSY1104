import './App.css';
import Navbar from './components/navbar';
import Banner from './components/banner';
import Info from './components/informacion';

function App() {
  return (
    <div className="">
      <Navbar />

      <div className='container'>
        <Banner />
        <Info />
      </div>
      
    </div>

    
  );
}

export default App;
