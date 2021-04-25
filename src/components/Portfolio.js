import React from 'react';
import employee from '../assets/images/employee-tracker.png';
import runbuddy from '../assets/images/run-buddy.png';
import simplesuds from '../assets/images/simplesuds.png';
import weather from '../assets/images/weather-dashboard.png';
import techblog from '../assets/images/tech-blog.png';
import covid from '../assets/images/covid.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  return (
    <div className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-center py-5'>Portfolio</h1>

        <div className='image-box-wrapper row justify-content-center'>
          {/* TODO Make these reusable components */}
          <div className='portfolio-image-box'>
            <img
              className='portfolio-image'
              src={simplesuds}
              alt='SimpleSuds Project'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
          </div>
          {/*  */}
          <div className='portfolio-image-box'>
            <img
              className='portfolio-image'
              src={runbuddy}
              alt='RunBuddy Project'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
          </div>
          {/*  */}
          <div className='portfolio-image-box'>
            <img
              className='portfolio-image'
              src={employee}
              alt='Employee Tracker Project'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
          </div>
          {/*  */}
          <div className='portfolio-image-box'>
            <img
              className='portfolio-image'
              src={techblog}
              alt='Tech Blog Project'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
          </div>
          {/*  */}
          <div className='portfolio-image-box'>
            <img
              className='portfolio-image'
              src={weather}
              alt='Weather Dashboard Project'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
          </div>
          {/*  */}
          <div className='portfolio-image-box'>
            <img className='portfolio-image' src={covid} alt='Covid Project' />
            <div className='overflow'></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
