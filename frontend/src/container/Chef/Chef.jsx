import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div  className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef img" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>cooking is not just a profession; it's a passion that weaves through every dish we create. As the chef, I believe in the magic of fresh, high-quality ingredients sourced from local farms and markets. Each meal we serve is a celebration of Italy's rich culinary heritage, infused with my personal touch and creativity.'</p>
        </div>
      </div>

      <div className='app__chef-sign'>
        <p>Franco Shima</p>
        <p className='p__opensans'>Chef & Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
