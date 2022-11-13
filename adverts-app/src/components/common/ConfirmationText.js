import classNames from "classnames";
import "../auth/LoginPage.css";

const ConfirmationText = (
  { className, label, action, dismiss, ...props },
  ref
) => {
  const estado = { display: "none" };
  return (
    <div className="loginPage-error">
      <h2>{label}</h2>
      <button className="loginForm" onClick={action}>
        Aceptar
      </button>
      <button className="loginForm" onClick={dismiss}>
        Cancelar
      </button>
    </div>
  );
};

export default ConfirmationText;
