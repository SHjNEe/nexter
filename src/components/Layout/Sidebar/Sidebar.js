import logo from "../../../img/logo.png";
import Realtor_1 from "../../../img/realtor-1.jpeg";

import { NavLink } from "react-router-dom";
import React, { useContext, useState } from "react";
import AuthContext from "../../../store/auth-context";
import UserNav from "./UserNav";

const Sidebar = (props) => {
  const ctx = useContext(AuthContext);
  const ctxName = ctx.isLoggedInUser.userName;
  const [isOpen, setIsOpen] = useState(false);

  function openUserNavHandler() {
    setIsOpen(!isOpen);
  }

  function logoutHandler(e) {
    e.preventDefault();
    ctx.onLogout(ctxName);
  }

  return (
    <div className="sidebar">
      <ul className="side-nav">
        <img src={logo} alt="" className="side-nav__logo" />
        {ctx.isLoggedInUser.isLoggedIn && (
          <li>
            <div className="side-nav__account" onClick={openUserNavHandler}>
              <img
                src={Realtor_1}
                alt=""
                className="side-nav__account__avt"
              ></img>
              <span className="side-nav__account__name">{ctxName}</span>
            </div>
            {isOpen && <UserNav />}
          </li>
        )}
        <li className="side-nav__item">
          <NavLink to="/" className="side-nav__link">
            <span>ホーム</span>
          </NavLink>
        </li>

        {!ctx.isLoggedInUser.isLoggedIn && (
          <li className="side-nav__item">
            <NavLink
              to="/login"
              onClick={(e) => e.preventDefault()}
              className="side-nav__link"
            >
              <span onClick={props.sidebarHandler.loginHandler}>ログイン</span>
            </NavLink>
          </li>
        )}
        {ctx.isLoggedInUser.isLoggedIn && (
          <li className="side-nav__item">
            <NavLink to="/my-favorites" className="side-nav__link">
              <span>お気に入り</span>
              <span className={`favorite-count ${ctx.clsToggle}`}>
                {ctx.isLoggedInUser.userFavListNumber > 0
                  ? ctx.isLoggedInUser.userFavListNumber
                  : ""}
              </span>
            </NavLink>
          </li>
        )}
        {ctx.isLoggedInUser.isLoggedIn && (
          <li className="side-nav__item">
            <NavLink to="/" className="side-nav__link">
              <span>オーダー</span>
            </NavLink>
          </li>
        )}
        {ctx.isLoggedInUser.isLoggedIn && (
          <li className="side-nav__item">
            <NavLink to="/" className="side-nav__link">
              <span>お問い合わせ</span>
            </NavLink>
          </li>
        )}
        {ctx.isLoggedInUser.isLoggedIn && (
          <li className="side-nav__item">
            <NavLink
              to="/login"
              onClick={logoutHandler}
              className="side-nav__link"
            >
              <span>ログアウト</span>
            </NavLink>
          </li>
        )}
      </ul>
      <button
        onClick={props.sidebarHandler.mobileMenuToggle}
        className="mobile-menu__btn"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};
export default Sidebar;
