import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import Favorites from "./Favorites";
import ErrorPage from "./404";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";
import MyProfile from "./MyProfile";
import HomeItemPage from "./HomeItemPage";
import UserSetting from "./UserSetting";
import PaymentPage from "./PaymentPage";
import NotificationsPage from "./NotificationsPage";
import MessagePage from "./MessagePage";

function RouteDirection() {
  const ctx = useContext(AuthContext);

  return (
    <Routes>
      <Route path="*" exact element={<ErrorPage />} />
      <Route path="/" exact element={<HomePage />} />
      <Route
        path="/my-favorites"
        exact
        element={
          ctx.isLoggedInUser.isLoggedIn ? (
            <Favorites />
          ) : (
            <Navigate replace to="/" />
          )
        }
      />
      <Route path="/homes/:id" exact element={<HomeItemPage />} />
      <Route
        path="/my-profile"
        exact
        element={
          ctx.isLoggedInUser.isLoggedIn ? (
            <MyProfile />
          ) : (
            <Navigate replace to="/" />
          )
        }
      />
      <Route
        path="/account-setting"
        exact
        element={
          ctx.isLoggedInUser.isLoggedIn ? (
            <UserSetting />
          ) : (
            <Navigate replace to="/" />
          )
        }
      />
      <Route
        path="/payment-method"
        exact
        element={
          ctx.isLoggedInUser.isLoggedIn ? (
            <PaymentPage />
          ) : (
            <Navigate replace to="/" />
          )
        }
      />
      <Route
        path="/user-notify"
        exact
        element={
          ctx.isLoggedInUser.isLoggedIn ? (
            <NotificationsPage />
          ) : (
            <Navigate replace to="/" />
          )
        }
      />
      <Route
        path="/user-message"
        exact
        element={
          ctx.isLoggedInUser.isLoggedIn ? (
            <MessagePage />
          ) : (
            <Navigate replace to="/" />
          )
        }
      />
    </Routes>
  );
}

export default RouteDirection;
