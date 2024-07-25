import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "../Navbar"
import Footer from "../Footer"
import Switch from "./Switch"

//renderizza il componente Router
export const AppRouter = () => {
  return (
    <Router>
      <div>      
        <div className='nav'>
          <Navbar/>
        </div>
        <div className='body'>
          <Switch/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </Router>
  )
}