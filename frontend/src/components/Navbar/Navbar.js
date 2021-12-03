import React, {useContext, useEffect, useState} from 'react'
import './Navbar.css';
import {NavLink, useNavigate} from 'react-router-dom';
import $ from 'jquery';
import {LoginModal} from "../modals/LoginModal";
import {AuthContext} from "../../auth/authContext";
import { types } from '../../types/types';

const Navbar = () => {
  const [loginModalShow, setLoginModalShow] = useState({show: false})
  const {user} = useContext(AuthContext);
  const { dispatch } = useContext( AuthContext )
  const navigate = useNavigate();
  function animation() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top": itemPosNewAnimTop.top + "px",
      "left": itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {

    animation();
    $(window).on('resize', function () {
      setTimeout(function () {
        animation();
      }, 500);
    });

  }, []);
  const handleLogin = (event) => {
    if (event) event.preventDefault();
    setLoginModalShow({show: !loginModalShow.show})
  }
  const handleLogout = ()=>{
    const action = {
      type: types.logout,
    }

    dispatch(action);
    navigate( "/home", {
      replace: true
    });
  }
  const forModal = {
    loginModalShow,
    setLoginModalShow: handleLogin
  }
  const modal = loginModalShow.show ? <LoginModal options={forModal}/> : null;
  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg" defaultActiveKey="/home">

      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        Pi-Commerce
      </NavLink>


      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>

      <div
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">

          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact>
              <i
                className="fas fa-tachometer-alt">
              </i>Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about" exact>
              <i
                className="far fa-address-book">
              </i>About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/service" exact>
              <i
                className="far fa-clone">
                </i>Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ofertas" exact>
                <i 
                className="far fa-chart-bar">
                </i>Ofertas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" exact>
                <i 
                className="far fa-copy">
              </i>Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
            {/*<NavLink className="nav-link" to="/login" exact>
                <i
                className="fas fa-sign-in-alt">
                </i>Login
              </NavLink>*/}
            {user.logged ? <NavLink className="nav-link" to="/" onClick={handleLogout}>
              <i className="fas fa-sign-in-alt"></i>Logout
            </NavLink> : <NavLink className="nav-link" to="/login" onClick={handleLogin} exact>
              <i className="fas fa-sign-in-alt"></i>Login
            </NavLink>
            }
          </li>
        </ul>
      </div>
      {modal}
    </nav>
  )
}
export default Navbar;