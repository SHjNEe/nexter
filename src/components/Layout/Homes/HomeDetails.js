import Icon from "../../Icon/Icon";
import { useContext, useState } from "react";
import AuthContext from "../../../store/auth-context";

const HomeDetails = (props) => {
  const [btnTitle, setBtnTitle] = useState(false);
  const ctx = useContext(AuthContext);

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

  return (
    <section className="home-details" id="home-details">
      <div className="home-details__other">
        問合せ先： 【通話料無料】 TEL：0800-812-9426
        （携帯電話・ＰＨＳからもご利用いただけます。）
      </div>
      <div className="home-details__img">
        <img
          src={props.item.img}
          alt={props.item.id}
          // className="home-details__img"
        />
      </div>
      <div className="home-details__info">
        <div className="home-details__location">
          <Icon name="icon-map-pin" />

          <p>所在地 ：{props.item.location}</p>
        </div>
        <div className="home-details__rooms">
          <Icon name="icon-profile-male" />

          <p>間取り：{props.item.rooms}</p>
        </div>
        <div className="home-details__area">
          <Icon name="icon-expand" />

          <p>
            土地面積：{props.item.area}
            <sup>2</sup>
          </p>
        </div>
        <div className="home-details__price">
          <Icon name="icon-key" />

          <p>価格：¥{props.item.price}</p>
        </div>
        {/* /// */}
        <div className="home-details__location">
          <Icon name="icon-map-pin" />

          <p>沿線・駅：</p>
        </div>
        <div className="home-details__rooms">
          <Icon name="icon-expand" />

          <p>建物面積：</p>
        </div>
        <div className="home-details__area">
          <Icon name="icon-expand" />

          <p>築年月：</p>
        </div>
        <div className="home-details__price">
          <Icon name="icon-key" />

          <p>即入居可</p>
        </div>

        <button onClick={likeHandler} className="btn home-details__btn">
          {!btnTitle ? "お気に入りリスト追加" : "お気に入りリストから削除"}
        </button>
        <button className="btn home-details__btn">お問い合わせ</button>
      </div>
      <div className="home-details__desc">
        世界一高額な家を持っているのは誰だと思う？　アメリカの中で一番高額な家は？　世界で最も高価なマンションの標準と考えられている家の設備は何？　インドの超高層ビルからカリフォルニアの丘の上にある邸宅まで、12もの巨大な豪邸を見て、これらの質問の答えや、その他のいろんなことを発見してみよう。だって、
        “リッチなファンタジーライフスタイル”を妄想するよりも、ほかに現実逃避を楽しむ方法はある？世界一高額な家を持っているのは誰だと思う？　アメリカの中で一番高額な家は？　世界で最も高価なマンションの標準と考えられている家の設備は何？　インドの超高層ビルからカリフォルニアの丘の上にある邸宅まで、12もの巨大な豪邸を見て、これらの質問の答えや、その他のいろんなことを発見してみよう。だって、
        “リッチなファンタジーライフスタイル”を妄想するよりも、ほかに現実逃避を楽しむ方法はある？
      </div>
    </section>
  );
};

export default HomeDetails;
