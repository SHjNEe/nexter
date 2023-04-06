import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";
import Realtor_1 from "../../img/realtor-1.jpeg";
import UserNav from "../Layout/Sidebar/UserNav";

const MobileMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const ctx = useContext(AuthContext);
  function mobileMenuHandler() {
    props.mobileMenuHandler.loginHandler();
    props.mobileMenuHandler.mobileMenuToggle();
  }
  function openUserNavHandler() {
    setIsOpen(!isOpen);
  }

  function logoutHandler(e) {
    e.preventDefault();
    ctx.onLogout(ctx.isLoggedInUser.userName);
  }

  return (
    <nav className={`mobile-menu ${props.cls}`}>
      <div className="mobile-menu__logo">
        <img src={logo} alt="" className="mobile-menu__logo__img" />
      </div>
      <ul className="mobile-menu__main">
        {ctx.isLoggedInUser.isLoggedIn && (
          <li className="mobile-menu__item " onClick={openUserNavHandler}>
            <NavLink to="/" className="mobile-menu__link ">
              <img
                src={Realtor_1}
                alt=""
                className="mobile-menu__account--avt"
              ></img>
              <span className="main-title fz-20">
                {ctx.isLoggedInUser.userName}
              </span>
            </NavLink>
            {isOpen && <UserNav />}
          </li>
        )}
        <li className="mobile-menu__item">
          <NavLink to="/" className="mobile-menu__link">
            <span className="main-title"> HOME</span>
            <span className="sub-title">ホーム</span>
          </NavLink>
        </li>
        {!ctx.isLoggedInUser.isLoggedIn && (
          <li className="mobile-menu__item">
            <NavLink
              onClick={(e) => e.preventDefault()}
              to="/"
              className="mobile-menu__link"
            >
              <span onClick={mobileMenuHandler} className="main-title">
                LOGIN
              </span>
              <span onClick={mobileMenuHandler} className="sub-title">
                ログイン
              </span>
            </NavLink>
          </li>
        )}
        {ctx.isLoggedInUser.isLoggedIn && (
          <li className="mobile-menu__item">
            <NavLink to="/my-favorites" className="mobile-menu__link">
              <span className="main-title">MY FAVORITE</span>
              <span className="sub-title">お気に入り</span>
            </NavLink>
          </li>
        )}
        {ctx.isLoggedInUser.isLoggedIn && (
          <li className="mobile-menu__item">
            <NavLink to="/" className="mobile-menu__link">
              <span className="main-title"> ORDER</span>
              <span className="sub-title">オーダー</span>
            </NavLink>
          </li>
        )}
        {ctx.isLoggedInUser.isLoggedIn && (
          <li className="mobile-menu__item">
            <NavLink to="/" className="mobile-menu__link">
              <span className="main-title">CONTACT US</span>
              <span className="sub-title">お問い合わせ</span>
            </NavLink>
          </li>
        )}
        {ctx.isLoggedInUser.isLoggedIn && (
          <li className="mobile-menu__item">
            <NavLink
              onClick={logoutHandler}
              to="/"
              className="mobile-menu__link"
            >
              <span className="main-title">LOG OUT</span>
              <span className="sub-title">ログアウト</span>
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default MobileMenu;
