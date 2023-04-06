import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import Icon from "../../Icon/Icon";

const HomeItem = (props) => {
  const ctx = useContext(AuthContext);
  const [btnTitle, setBtnTitle] = useState(false);

  function likeHandler() {
    if (ctx.isLoggedInUser.isLoggedIn) {
      if (
        ctx.isLoggedInUser.userFavList.findIndex(
          (item) => item.id === props.item.id
        ) === -1
      ) {
        const newItem = {
          ...props.item,
          isActive: true,
        };
        ctx.addFav(newItem);
        setBtnTitle(!btnTitle);
      } else {
        ctx.removeFav(props.item.id);
        setBtnTitle(!btnTitle);
      }
    } else {
      return;
    }
  }
  let cls = ctx.isLoggedInUser.userFavList.find(
    (item) => item.id === props.item.id
  )
    ? "home__like-active"
    : "";

  return (
    <div className="home">
      <img src={props.item.img} alt={props.item.id} className="home__img" />
      <Icon
        onClick={likeHandler}
        cls={`home__like ${cls}`}
        name="icon-heart-full"
      />
      <NavLink to={`/homes/${props.item.name}`} className="home__name">
        {props.item.name}
      </NavLink>
      <div className="home__location">
        <Icon name="icon-map-pin" />

        <p>
          住所：
          {props.item.location}
        </p>
      </div>
      <div className="home__rooms">
        <Icon name="icon-profile-male" />

        <p>間取り：{props.item.rooms}</p>
      </div>
      <div className="home__area">
        <Icon name="icon-expand" />

        <p>
          土地面積：{props.item.area}
          <sup>2</sup>
        </p>
      </div>
      <div className="home__price">
        <Icon name="icon-key" />

        <p>価格：¥{props.item.price}</p>
      </div>
      <NavLink to={`/homes/${props.item.name}`} className="btn home__btn">
        詳しく見る
      </NavLink>
    </div>
  );
};
export default HomeItem;
