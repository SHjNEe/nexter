import Icon from "../../Icon/Icon";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../store/auth-context";

const FavorItem = (props) => {
  const ctx = useContext(AuthContext);
  function removeFavItem(id) {
    ctx.removeFav(props.item.id);
  }
  return (
    <div className="favorite">
      <img src={props.item.img} alt={props.item.id} className="favorite__img" />
      <Icon
        onClick={removeFavItem}
        cls={`favorite__like `}
        name="icon-heart-full"
      />
      <NavLink to={`/homes/${props.item.name}`} className="favorite__name">
        {props.item.name}
      </NavLink>

      <div className="favorite__location">
        <Icon name="icon-map-pin" />

        <p>住所：{props.item.location}</p>
      </div>
      <div className="favorite__rooms">
        <Icon name="icon-profile-male" />

        <p>間取り：{props.item.rooms}</p>
      </div>
      <div className="favorite__area">
        <Icon name="icon-expand" />

        <p>
          土地面積：{props.item.area}
          <sup>2</sup>
        </p>
      </div>
      <div className="favorite__price">
        <Icon name="icon-key" />

        <p>価格：¥{props.item.price}</p>
      </div>
      <button className="btn favorite__btn">お問い合わせ</button>
    </div>
  );
};
export default FavorItem;
