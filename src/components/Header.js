import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper">
           <div className="main-info">
           <h1> Hello.</h1>
           <Typed className="typed-text"
           strings={["I am a Full Stack Developer."]}
            typeSpeed={40}
            backSpeed={60}
            loop
           />
           <a href="#" className="btn-main-"></a>
           </div>
        </div>
    )
}

export default Header
