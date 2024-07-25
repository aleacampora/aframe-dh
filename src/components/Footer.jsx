import React from 'react';
import { Link } from 'react-router-dom';
import useHandleClickBackToHP from '../assets/utils/backToHomePage';
import { Button } from './Button';

const Footer = () => {

  const handleClickBackTooHP = useHandleClickBackToHP()

  return (
    <div className='footer'>
      <ul className="nav-links">
        <li className="nav-item">
          <Button onClick={handleClickBackTooHP} message={'Home'}/>
        </li>
        <li className="nav-item">
          <Link to="/scene1" title='First Scene' className='link'>Scene One</Link>
        </li>
        <li className="nav-item">
          <Link to="/scene2" title='Second Scene' className='link'>Scene Two</Link>
        </li>
        <li className="nav-item">
          <Link to="/scene3" title='Third Scene' className='link'>Scene Three</Link>
        </li>
        <li className="nav-item">
          <Link to="/scene4" title='AR Scene' className='link'>AR Scene</Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
