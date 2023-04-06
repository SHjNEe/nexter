import { useContext } from "react";
import AuthContext from "../../../store/auth-context";
import FavorItem from "./FavorItem";

const Favor = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <div className="favorites">
      {ctx.isLoggedInUser.userFavList.length === 0 && (
        <div className="favorites__corlo">
          <h1>物件が入っていません</h1>
          <h3>現在、お気に入りには物件が入っていません。</h3>
        </div>
      )}
      {ctx.isLoggedInUser.userFavList.map((item) => (
        <FavorItem key={item.id} item={item} />
      ))}
    </div>
  );
};
export default Favor;
