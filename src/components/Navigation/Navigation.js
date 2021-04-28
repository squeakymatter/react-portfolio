import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {NavbarItems} from './NavbarItems';

const Navigation = () => {

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-dark fixed-top'>
      <div className='container'>
        <NavLink exact to='/'
          className='navbar-brand'
          id="home"
        >
          Michelle W(a-z)
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='nav navbar-nav ml-auto'>
          {NavbarItems.map((item, index) => {
            return (
              <NavLink exact to={item.url}  className={item.cName} activeClassName="main-nav-active">
                {item.title}
              </NavLink>
            )
          })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
