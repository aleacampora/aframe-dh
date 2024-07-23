import './App.css';
import { AFrameBody } from './components/AframeRender';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>      
      <div className='nav'>
        <Navbar/>
      </div>
      <div className='body'>
        <AFrameBody/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
