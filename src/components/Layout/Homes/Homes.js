import React, { useContext } from "react";
import AuthContext from "../../../store/auth-context";
import HomeItem from "./HomeItem";

const Home = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <section className="homes" id="home">
      {ctx.HOME_DATA.map((item) => (
        <HomeItem key={item.id} item={item} />
      ))}
    </section>
  );
};
export default Home;
