import { useContext, useState } from "react";
import useInput from "../../hook/useInput";
import AuthContext from "../../store/auth-context";

const regUserName = /^[A-Za-z0-9_\.]{6,32}$/;
const regUserPassword = /^[A-Za-z0-9_\.]{6,32}$/;
const regUserEmail =
  /^[A-Za-z0-9_.]{6,32}@([a-zA-Z0-9]{2,12})(.[a-zA-Z]{2,12})+$/;
const regUserPhone = /^[0-9\-]{10,14}$/;

const isNotUser = (value) => regUserName.test(value.trim());
const isNotPassword = (value) => regUserPassword.test(value.trim());
const isNotEmail = (value) => regUserEmail.test(value.trim());
const isNotPhoneNumber = (value) => regUserPhone.test(value.trim());

const SignupForm = (props) => {
  function backToLoginForm() {
    setIsSuccess(!isSuccess);
    props.formHandler.formChange();
  }

  function closeLoginForm() {
    setIsSuccess(!isSuccess);
    props.formHandler.loginFormClose();
  }
  const [isSuccess, setIsSuccess] = useState(true);
  const [userNameExist, setUserNameExist] = useState(false);
  const userCtx = useContext(AuthContext);

  const {
    value: enteredUserName,
    isValid: userNameIsValid,
    hasError: enteredUserNameHasError,
    valueChangeHandler: userNameChangeHandler,
    inputBlurHandler: userNameBlurHandler,
    reset: resetUserName,
  } = useInput(isNotUser);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: enteredPasswordHasError,
    valueChangeHandler: enteredPasswordChangeHandler,
    inputBlurHandler: enteredPasswordBlurHandler,
    reset: resetEnteredPassword,
  } = useInput(isNotPassword);
  const isNotCorfirmPassword = (value) =>
    regUserPassword.test(value.trim()) &&
    value.trim() === enteredPassword.trim();
  const {
    value: enteredConfirmPassword,
    isValid: enteredConfirmPasswordIsValid,
    hasError: enteredConfirmPasswordHasError,
    valueChangeHandler: enteredConfirmPasswordChangeHandler,
    inputBlurHandler: enteredConfirmPasswordBlurHandler,
    reset: resetConfirmEnteredPassword,
  } = useInput(isNotCorfirmPassword);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: enteredEmailChangeHandler,
    inputBlurHandler: enteredEmailBlurHandler,
    reset: resetEnteredEmail,
  } = useInput(isNotEmail);

  const {
    value: enteredPhoneNumber,
    isValid: enteredPhoneNumberIsValid,
    hasError: enteredPhoneNumberHasError,
    valueChangeHandler: enteredPhoneNumberChangeHandler,
    inputBlurHandler: enteredPhoneNumberBlurHandler,
    reset: resetEnteredPhoneNumber,
  } = useInput(isNotPhoneNumber);

  let formIsCorrect = false;

  if (
    userNameIsValid &&
    enteredPasswordIsValid &&
    enteredEmailIsValid &&
    enteredPhoneNumberIsValid &&
    enteredConfirmPasswordIsValid
  ) {
    formIsCorrect = true;
  }

  const userNameInputClasses = enteredUserNameHasError ? "form_invalid" : "";

  const passwordInputClasses = enteredPasswordHasError ? "form_invalid" : "";

  const passwordConfirmInputClasses = enteredConfirmPasswordHasError
    ? "form_invalid"
    : "";

  const emailInputClasses = enteredEmailHasError ? "form_invalid" : "";

  const phoneNumberInputClasses = enteredPhoneNumberHasError
    ? "form_invalid"
    : "";

  function addUser(e) {
    e.preventDefault();

    const newUser = {
      userType: "Normal",
      userName: enteredUserName,
      userPassword: enteredPassword,
      userEmail: enteredEmail,
      userPhoneNumber: enteredPhoneNumber,
      userFavList: [],
      userFavListNumber: null,
      isLoggedIn: false,
    };
    if (formIsCorrect) {
      if (
        userCtx.user.findIndex((user) => user.userName === newUser.userName) ===
        -1
      ) {
        userCtx.addNewUser(newUser);
        setIsSuccess(!isSuccess);
      } else {
        setUserNameExist(true);
        resetUserName();
      }
    } else {
      return;
    }
  }

  return (
    <form
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
      className="signup-form"
    >
      <div className="close-btn" onClick={closeLoginForm}>
        <span></span>
        <span></span>
      </div>
      {isSuccess ? (
        <>
          <h3 className="heading-5">新規登録</h3>
          <label htmlFor="id">ユーザーID</label>
          <input
            className={userNameInputClasses}
            value={enteredUserName}
            onChange={userNameChangeHandler}
            onBlur={userNameBlurHandler}
            id="id"
            type="text"
            placeholder="半角英数字記号 6文字以上"
            required
          />

          <label htmlFor="pwd">パスワード</label>
          <input
            className={passwordInputClasses}
            value={enteredPassword}
            onChange={enteredPasswordChangeHandler}
            onBlur={enteredPasswordBlurHandler}
            id="pwd"
            type="password"
            placeholder="半角英数字記号 6文字以上"
            required
          />
          <label htmlFor="pwdcf">パスワード確認</label>
          <input
            className={passwordConfirmInputClasses}
            value={enteredConfirmPassword}
            onChange={enteredConfirmPasswordChangeHandler}
            onBlur={enteredConfirmPasswordBlurHandler}
            id="pwdcf"
            type="password"
            placeholder="パスワードをもう一度入力してください"
            required
          />
          <label htmlFor="email">メールアドレス</label>
          <input
            className={emailInputClasses}
            value={enteredEmail}
            onChange={enteredEmailChangeHandler}
            onBlur={enteredEmailBlurHandler}
            id="email"
            type="email"
            placeholder="メールアドレスを正しく入力してください"
            required
          />

          <label htmlFor="phone-number">電話番号</label>
          <input
            className={phoneNumberInputClasses}
            value={enteredPhoneNumber}
            onChange={enteredPhoneNumberChangeHandler}
            onBlur={enteredPhoneNumberBlurHandler}
            id="phone-number"
            type="text"
            placeholder="電話番号を入力ください"
            required
          />
          {!userNameExist ? (
            <p className="sub-title">
              Nexterの利用規約とプライバシー規約に同意いただける場合はアカウントを作成してください。"
            </p>
          ) : (
            <p className="sub-title isvalid">
              このユーザーIDは存在しました。 他のユーザーIDを試してください。
            </p>
          )}
          <button
            onClick={addUser}
            className={`btn mb-sm ${formIsCorrect ? "" : "disable"}`}
          >
            登録
          </button>
          <p className="main-title  mt-sm" onClick={backToLoginForm}>
            前の画面を戻す
          </p>
        </>
      ) : (
        <>
          <div className="success">登録に成功しました!!</div>
          <p className="main-title" onClick={backToLoginForm}>
            ログイン
          </p>
        </>
      )}
    </form>
  );
};

export default SignupForm;
