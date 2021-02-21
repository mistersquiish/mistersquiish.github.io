import React, { useState, useEffect } from 'react';

const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    var activeState = (isActive) ? false : true;
    var openState = (isOpen) ? false : true;
    setIsActive(activeState);
    setIsOpen(openState);
  }

  return (
    <div>
      <div className={isActive ? "button_container active" : "button_container"} id="toggle" onClick={(openMenu)}>
        <span className="top"></span>
        <span className="middle"> </span><span className="bottom"></span>
      </div>
      <div className={isOpen ? "overlay open" : "overlay"} id="overlay">
        <nav className="overlay-menu">
          <ul>
            {/* <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/resume">Resume</a></li>
            <li><a href="/contact">Contact</a></li> */}
            <li><a href="https://henryvuong.com/">Home</a></li>
            <li><a href="https://henryvuong.com/blog">Blog</a></li>
            <li><a href="https://henryvuong.com/resume">Resume</a></li>
            <li><a href="https://henryvuong.com/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Menu;
