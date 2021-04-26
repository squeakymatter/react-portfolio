import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <div className='footer'>
                <div class='social-container text-center'>
                  <a
                    href='https://github.com/squeakymatter' target="_blank"
                    className='github social' rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} size='2x' />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/michelle-wolschlager-23778814/'
                    target="_blank"
                    className='linkedin social' rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size='2x' />
                  </a>
                  <a
                    href='https://twitter.com/m_squeaked'
                    target="_blank"
                    className='twitter social' rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} size='2x' />
                  </a>
                </div>
       



      </div>
    </div>
  );
};

export default Footer;

//github, linkedin, stackoverflow, et.c

//
//
//
