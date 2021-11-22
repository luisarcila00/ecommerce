import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { NavbarData } from './NavbarData';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
            <a href="index.html">PI-COMMERCE</a>
          </Link>
          
          <div className='btn-nav'>
          {NavbarData.map((item, index) =>{
            return(
              <li key={index} className={item.cName}>
                  <Link to={item.path}>
                  {item.icon}
                    <span><b>{item.title}</b></span>
                  </Link>
                </li>
            )
          })}
          </div>  
          <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html" > Sign In</a>
      </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
            <h3>Admin Categories</h3>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose className="sidebar-close-button"/>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      
    </>
  );
}

export default Navbar;