import React from "react";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import './Sidebar.css';

function SidebarComp() {

  
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
    <nav className= "nav-menu">
          <ul className="nav-menu-items" >
            <li className="navbar-toggle">
              <h5><i>Admin Categories</i></h5>
              <hr></hr>
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
  );
}

export default SidebarComp;
