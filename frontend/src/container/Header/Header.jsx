import React from 'react';
import images from '../../constants/images';
import { SubHeading } from '../../components';
import { Link, useNavigate } from 'react-router-dom';

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour"/>
      <h1 className='app__header-h1'>Dove Si Mangia In Allegria.</h1>
      <Link type='button' to={'/menu'} className='custom__button'>Explore Menu</Link>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);


export default Header;
