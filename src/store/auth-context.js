import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState, useEffect, useReducer } from "react";
import { HOME_DATA } from "./HomesData";

const initUser = localStorage.getItem("UserList")
  ? JSON.parse(localStorage.getItem("UserList"))
  : [
      {
        userType: "admin",
        userName: "admin",
        userPassword: "admin",
        userEmail: "admin@gmail.com",
        userPhoneNumber: "0999888999",
        userFavList: [],
        userFavListNumber: null,
        isLoggedIn: false,
      },
    ];

const isLoggedUser = localStorage.getItem("isLoggedUser");

const AuthContext = React.createContext({
  HOME_DATA: [],
  user: [
    {
      userType: null,
      userName: null,
      userPassword: null,
      userEmail: null,
      phoneNumber: null,
      isLoggedIn: false,

      favList: [],
      userFavListNumber: null,
    },
  ],
  //Add New user
  addNewUser(newUser) {},
  isLoggedInUser: {},

  //Login-out

  onLogout: (name) => {},
  onLogin: (name) => {},
  //Homes

  //FavList
  FavList: [],
  addFav(id) {},
  removeFav(id) {},
});

const initLogedUser = isLoggedUser
  ? {
      ...initUser.find(
        (user) => (user.userName = localStorage.getItem("isLoggedUser"))
      ),
      isLoggedIn: true,
    }
  : {
      userType: "Normal",
      userName: null,
      userPassword: null,
      userEmail: null,
      userPhoneNumber: null,
      userFavList: [],
      userFavListNumber: null,
      isLoggedIn: false,
    };

const logedUserReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...action.payload,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        isLoggedIn: false,
        userFavList: [],
        userFavListNumber: null,
      };
    case "ADDFAV":
      return {
        ...state,
        userFavList: [...state.userFavList, action.payload],
        userFavListNumber: state.userFavList.length + 1,
      };
    case "REMOVEFAV":
      return {
        ...state,
        userFavList: state.userFavList.filter(
          (item) => item.id !== action.payload
        ),
        userFavListNumber: state.userFavList.length - 1,
      };
    default:
      return state;
  }
};
export const AuthContextProvider = (props) => {
  const [users, setUsers] = useState(initUser);

  const [isLoggedInUser, dispathLogedUser] = useReducer(
    logedUserReducer,
    initLogedUser
  );

  const [clsToggle, setClsTogle] = useState();
  // User

  useEffect(() => {
    if (isLoggedInUser.userFavList.length > 0) {
      setClsTogle("increase");
    } else {
      setClsTogle("");
    }
    const timer = setTimeout(() => {
      setClsTogle("");
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [isLoggedInUser.userFavList]);

  const logoutHandler = (name) => {
    localStorage.removeItem("isLoggedUser");
    dispathLogedUser({ type: "LOGOUT" });
  };
  const loginHandler = (name) => {
    localStorage.setItem("isLoggedUser", name);
    dispathLogedUser({
      type: "LOGIN",
      payload: users.find((user) => user.userName === name),
    });
  };
  function addFavList(item) {
    dispathLogedUser({ type: "ADDFAV", payload: item });
  }
  function removeFavList(id) {
    dispathLogedUser({ type: "REMOVEFAV", payload: id });
  }

  function addNewUserHandler(newUser) {
    localStorage.setItem("UserList", JSON.stringify([...users, newUser]));
    setUsers((prev) => [...prev, newUser]);
  }

  return (
    <AuthContext.Provider
      value={{
        HOME_DATA: HOME_DATA,

        user: users,
        addNewUser: addNewUserHandler,
        isLoggedInUser: isLoggedInUser,

        //Login-out

        onLogout: logoutHandler,
        onLogin: loginHandler,
        //Homes
        //Favorite List
        // FavList: FavList,
        addFav: addFavList,
        removeFav: removeFavList,

        clsToggle: clsToggle,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
