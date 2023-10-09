import React from 'react';
import './Navbar.css';
import Logo from '../../assets/Eventbrite.svg'

function Navbar() {
  return (
    <div className="navbar">
      <div className="left-navbar">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="search-events">
          <div className="magnify">
            
          </div>
          <div className="search-eventstext"></div>
        </div>
      </div>
      <div className="right-navbar">
        <div className="create-an-event-button"></div>
        <div className="likes-button"></div>
        <div className="tickets-button"></div>
        <div className="profile"></div>
      </div>
    </div>
  );
}

export default Navbar;