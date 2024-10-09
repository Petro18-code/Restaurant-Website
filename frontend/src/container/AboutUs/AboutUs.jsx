import React from 'react';
import images from '../../constants/images';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="g letter" />
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className='p__opensans'>Welcome to Il Giardino Ai Fori, where culinary tradition meets modern elegance in the heart of ROME. Our restaurant is inspired by the rich heritage of Italian cuisine, offering a diverse menu that celebrates the authentic flavors of Italy.'</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className='p__opensans'>Il Giardino Ai Fori has its roots deeply embedded in the heart of Italian culinary tradition. Established in 2015, our restaurant was born from a passion for authentic Italian flavors and a desire to create a welcoming space for the community.'</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
