import { NavLink } from "react-router-dom";

const UserNav = (props) => {
  return (
    <ul className="user-nav">
      <li className="user-nav__item">
        <NavLink to="/user-notify" className="user-nav__link">
          <span>お知らせ</span>
        </NavLink>
      </li>
      <li className="user-nav__item">
        <NavLink to="/user-message" className="user-nav__link">
          <span>メッセージ</span>
        </NavLink>
      </li>
      <li className="user-nav__item">
        <NavLink to="/account-setting" className="user-nav__link">
          <span>アカウント設定</span>
        </NavLink>
      </li>
      <li className="user-nav__item">
        <NavLink to="/payment-method" className="user-nav__link">
          <span>支払い方法</span>
        </NavLink>
      </li>
      <li className="user-nav__item">
        <NavLink to="/my-profile" className="user-nav__link">
          <span>公開プロフィール</span>
        </NavLink>
      </li>
      <li className="user-nav__item">
        <NavLink to="/my-profile" className="user-nav__link">
          <span>プロフィールを編集</span>
        </NavLink>
      </li>
      <li className="user-nav__item">
        <NavLink to="/help" className="user-nav__link">
          <span>ヘルプ</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default UserNav;
