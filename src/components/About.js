import React from 'react';
import crest from '../assets/images/crest.svg';
const About = () => {
  return (
    <div id="about" className="about-wrapper">
    <div className='container py-5'>
      <div className='row'>
        <div className='col-lg-2 col-xm-12 about-photo mb-5'>
          <img src={crest} alt='author' className='crest' />
        </div>
        <div className='col-lg-10 col-xm-12'>
          <h1 className='content-header'>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
            commodi iste molestiae. Fuga nemo quas minus libero iure
            praesentium, illum distinctio nam? Fuga nam nemo quasi porro fugit?
            Rerum, laborum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laudantium itaque quibusdam ab, aliquid, officia natus possimus
            veritatis nemo voluptatibus mollitia iure quis? Tempora laboriosam
            quas ea magni eum eligendi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laudantium itaque quibusdam ab, aliquid, officia natus possimus
            veritatis nemo voluptatibus mollitia iure quis? Tempora laboriosam
            quas ea magni eum eligendi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laudantium itaque quibusdam ab, aliquid, officia natus possimus
            veritatis nemo voluptatibus mollitia iure quis? Tempora laboriosam
            quas ea magni eum eligendi.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
