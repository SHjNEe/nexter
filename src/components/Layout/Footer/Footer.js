import { NavLink } from "react-router-dom";
const Footer = (props) => {
  return (
    <footer className="footer" id="footer">
      <ul className="nav">
        <li className="nav__item">
          <NavLink to="" className="nav__link">
            フォレストの家づくり
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="" className="nav__link">
            住まいの作品集
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="" className="nav__link">
            資料をダウンロード
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="" className="nav__link">
            お問い合わせ
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="" className="nav__link">
            会社情報
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="" className="nav__link">
            イベント情報
          </NavLink>
        </li>
      </ul>
      <p className="copyright">&copy; Copyright 2022 by Nguyen Bao Trung !</p>
    </footer>
  );
};
export default Footer;
