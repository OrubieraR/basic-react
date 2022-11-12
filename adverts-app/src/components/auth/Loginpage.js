import { useState } from "react";
import Button from "../common/Button";
import FormField from "../common/FormField";
import { login } from "./service";
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [checked, setChecked] = useState(false);

  const handleChangeUsername = (event) => setUsername(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);
  const handleErrorClick = () => setError(null);
  const handleChecked = () => {
    const value = document.querySelector("#rememberme").checked;
    setChecked(value);
    // console.log(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(username, password, "Checked sale como: " + checked);
    login({ username, password }, checked).then(onLogin, (err) =>
      setError(err)
    );
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
        <FormField
          type="password"
          name="password"
          label="password"
          className="loginForm-Field"
          onChange={handleChangePassword}
          value={password}
        />

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
