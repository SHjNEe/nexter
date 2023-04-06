import React, { Fragment, useState } from "react";

import Header from "./Header/Header";
import MobileMenu from "../MobileMenu/MobileMenu";
import Realtor from "./Realtor/Realtor";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import Login from "../Login/Login";

const Layout = (props) => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const Obj = {
    loginHandler() {
      setIsLoginOpen(!isLoginOpen);
    },
    mobileMenuToggle() {
      setIsOpenMobileMenu(!isOpenMobileMenu);
    },
  };

  return (
    <Fragment>
      {isLoginOpen && <Login loginFormHandler={Obj.loginHandler} />}
      <MobileMenu
        mobileMenuHandler={Obj}
        cls={isOpenMobileMenu ? "open" : ""}
      />
      <div
        id="global-container"
        className={isOpenMobileMenu ? "menu-open" : ""}
      >
        <div className="container">
          <div
            onClick={Obj.mobileMenuToggle}
            className="mobile-menu__cover"
          ></div>
          <Sidebar sidebarHandler={Obj} />
          <Header />
          <Realtor />
          {props.children}
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
