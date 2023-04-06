import { useContext, useRef, useState } from "react";
import AuthContext from "../../store/auth-context";

const LoginForm = (props) => {
  const ctxUser = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  const accountIdRef = useRef();
  const passwordRef = useRef();

  function inputOnChange() {
    setFormIsValid(false);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    const user = ctxUser.user.find(
      (el) => el.userName === accountIdRef.current.value
    );
    if (user) {
      if (user.userPassword === passwordRef.current.value) {
        ctxUser.onLogin(user.userName);

        setIsSuccess(!isSuccess);
      } else {
        setFormIsValid(true);
      }
    } else {
      setFormIsValid(true);
    }
  }
  function closeLoginForm() {
    props.formHandler.loginFormClose();
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="login-form"
    >
      <div className="close-btn" onClick={closeLoginForm}>
        <span></span>
        <span></span>
      </div>
      {isSuccess ? (
        <>
          <h3 className="heading-5">Nexter会員ログイン</h3>
          <label htmlFor="id">ユーザーID</label>
          <input
            ref={accountIdRef}
            id="id"
            type="text"
            placeholder="Account ID (admin)"
            onChange={inputOnChange}
            required
          />
          <label htmlFor="pwd">パスワード</label>
          <input
            ref={passwordRef}
            id="pwd"
            type="password"
            placeholder="Password (admin)"
            onChange={inputOnChange}
            required
          />
          {!formIsValid && (
            <div className="login-check">
              <input id="remember" type="checkbox" className="login-checkbox" />
              <label htmlFor="remember" className="login-label">
                <p className="sub-title">ログイン状態を保存する</p>
              </label>
            </div>
          )}
          {formIsValid && (
            <h2 className="isvalid">
              ユーザーID または パスワードが違いました！
            </h2>
          )}
          <button className="btn">ログイン</button>
          <p className="sub-title">または</p>
          <p className="main-title" onClick={props.formHandler.formChange}>
            新規登録
          </p>
        </>
      ) : (
        <>
          <>
            <div className="success">
              お帰りなさい！{ctxUser.isLoggedInUser.userName}{" "}
            </div>
            <p className="main-title" onClick={closeLoginForm}>
              閉じる！
            </p>
          </>
        </>
      )}
    </form>
  );
};

export default LoginForm;
