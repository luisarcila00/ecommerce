import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { NavbarData } from "./NavbarData";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav className="navbar">
          <Nav.Item>
            <Nav.Link>
              <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
                <Link to="/">PI-COMMERCE</Link>
              </Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="3">Nosotros</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="3">Contactenos</Nav.Link>
          </Nav.Item>
          <NavDropdown   title="Contenido"  id="nav-dropdown">
            <NavDropdown.Item  eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item   eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item  eventKey="4.3">
              Something else here
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item  eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>

          <Nav.Item>
            <Nav.Link href="cart.html">
              {" "}
              <FaIcons.FaCartPlus /> Cart
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="signin.html"> Sign In</Nav.Link>
          </Nav.Item>
        </Nav>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <h3>Admin Categories</h3>
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose className="sidebar-close-button" />
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
