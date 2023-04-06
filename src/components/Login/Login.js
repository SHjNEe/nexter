import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useState } from "react";

const Login = (props) => {
  const [formChange, setFormChange] = useState(false);
  const formHandler = {
    formChange() {
      setFormChange(!formChange);
    },
    loginFormClose() {
      props.loginFormHandler();
    },
  };

  return (
    <div onClick={formHandler.loginFormClose} className="login-cover">
      {!formChange ? (
        <LoginForm formHandler={formHandler} />
      ) : (
        <SignupForm formHandler={formHandler} />
      )}
    </div>
  );
};
export default Login;
