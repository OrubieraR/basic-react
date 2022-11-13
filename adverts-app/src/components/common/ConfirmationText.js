import classNames from "classnames";
import "../auth/LoginPage.css";

const ConfirmationText = ({ className, label, action, ...props }, ref) => {
  const estado = { display: "none" };
  return (
    <div className="loginPage-error">
      <h2>{label}</h2>
      <button className="loginForm" onClick={action}>
        Aceptar
      </button>
    </div>
  );
};

export default ConfirmationText;
