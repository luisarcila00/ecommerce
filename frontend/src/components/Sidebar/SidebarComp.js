import React from "react";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function SidebarComp() {
  
  return (
      <nav className="nav-menu">
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <h5>
              <i>Admin Panel</i>
            </h5>
          </li>
          <hr></hr>
          <div id="iconsidebar">
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
          </div>
        </ul>
      </nav>
  );
}

export default SidebarComp;
