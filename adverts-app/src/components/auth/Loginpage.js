import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../common/Button";
import FormField from "../common/FormField";
// import { useAuth } from "./context";
import { login } from "./service";
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [checked, setChecked] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // const { handleLogin } = useAuth();

  const handleChangeUsername = (event) => setUsername(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);
  const handleErrorClick = () => setError(null);
  const handleChecked = () => {
    const value = document.querySelector("#rememberme").checked;
    setChecked(value);
    // console.log(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(username, password, "Checked sale como: " + checked);
    login({ username, password }, checked).then(
      function () {
        login({ username, password }, checked);
        onLogin();
        const to = location.state?.from?.pathname || "/";
        // console.log(to);
        navigate(to, { replace: true });
      },
      (err) => setError(err)
    );
    // try {
    //   await login({ username, password }, checked);
    //   onLogin();
    //   handleLogin();
    //   const to = location.state?.from?.pathname || "/";
    //   console.log(to);
    //   navigate(to);
    // } catch (error) {
    //   setError(error);
    // }
  };

  const isEnabled = () => {
    return username && password;
  };

  return (
    <div>
      <h1>Login a anuncios online.</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="username"
          label="phone, email or username"
          className="loginForm-Field"
          onChange={handleChangeUsername}
          value={username}
        />
        <br></br>
        <FormField
          type="password"
          name="password"
          label="password"
          className="loginForm-Field"
          onChange={handleChangePassword}
          value={password}
        />
        <br></br>
        <Button
          type="submit"
          className="loginForm-input"
          disabled={!isEnabled()}
        >
          Log in
        </Button>

        <div>
          <label>
            <input
              id="rememberme"
              type="checkbox"
              name="rememberme"
              onClick={handleChecked}
            ></input>
            Recordarme en este ordenador
          </label>
        </div>
      </form>

      {error && (
        <div onClick={handleErrorClick} className="loginPage-error">
          {error.message}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
