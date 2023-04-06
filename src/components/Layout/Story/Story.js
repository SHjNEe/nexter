import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../../img/story-1.jpeg";
import img2 from "../../../img/story-2.jpeg";

const Story = (props) => {
  return (
    <Fragment>
      <div className="story__pictures">
        <img src={img1} alt="Couple with new house" className="story__img--1" />
        <img src={img2} alt="New house" className="story__img--2" />
      </div>
      <div className="story__content">
        <h3 className="heading-1-1 mb-sm">幸せな顧客</h3>
        <h2 className="heading-2 heading-2--dark mb-md">
          &ldquo;人生の最良の決定&rdquo;
        </h2>
        <p className="story__text">
          世界一高額な家を持っているのは誰だと思う？　アメリカの中で一番高額な家は？　世界で最も高価なマンションの標準と考えられている家の設備は何？　インドの超高層ビルからカリフォルニアの丘の上にある邸宅まで、12もの巨大な豪邸を見て、これらの質問の答えや、その他のいろんなことを発見してみよう。だって、
          “リッチなファンタジーライフスタイル”を妄想するよりも、ほかに現実逃避を楽しむ方法はある？
        </p>
        <NavLink to="/" className="btn">
          自分の家を探す
        </NavLink>
      </div>
    </Fragment>
  );
};
export default Story;
