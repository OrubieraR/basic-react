import { useState } from "react";
import Button from "../common/Button";
import FormField from "./FormField";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeUsername = (event) => setUsername(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
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
        />
        <FormField
          type="password"
          name="password"
          label="password"
          className="loginForm-Field"
          onChange={handleChangePassword}
        />

        <Button type="submit">Log in</Button>
      </form>
    </div>
  );
};

export default LoginPage;
