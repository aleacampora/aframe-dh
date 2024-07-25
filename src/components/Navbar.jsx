import React from 'react'
import logo from '../assets/images/sfidalogo.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>SFIDAFRAME</h1>
      <img src={logo} alt="logo" className='logo'/>
    </div>
  )
}

export default Navbar