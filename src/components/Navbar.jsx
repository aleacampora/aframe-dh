import React from 'react'
import logo from '../assets/sfidalogo.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Progetto AFrame - SFIDA-DH</h1>
      <img src={logo} alt="logo" className='logo'/>
    </div>
  )
}

export default Navbar