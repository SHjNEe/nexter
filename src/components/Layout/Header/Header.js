import logo from "../../../img/logo.png";
import logo1 from "../../../img/logo-bbc.png";
import logo2 from "../../../img/logo-forbes.png";
import logo3 from "../../../img/logo-techcrunch.png";
import logo4 from "../../../img/logo-bi.png";

import { Link } from "react-scroll";
const Header = (props) => {
  return (
    <header className="header">
      <img src={logo} alt="" className="header__logo" />
      <h3 className="heading-3">住むほどに健康と笑顔に。</h3>
      <h1 className="heading-1">幸せあふれる家探し。</h1>
      <Link to="home" spy={true} smooth={true} className="btn header__btn">
        おすすめを表示する
      </Link>
      <div className="header__seenon-text">参考</div>
      <div className="header__seenon-logos">
        <img src={logo1} alt="Seen on logo 1" />
        <img src={logo2} alt="Seen on logo 2" />
        <img src={logo3} alt="Seen on logo 3" />
        <img src={logo4} alt="Seen on logo 4" />
      </div>
    </header>
  );
};

export default Header;
