import classNames from "classnames";
import "./FormField.css";

const FormField = ({ className, label, ...props }, ref) => {
  return (
    <div className={classNames("formField", className)}>
      <label className="formField-label">
        <span>{label}</span>
        <input
          className="formField-input"
          autoComplete="off"
          {...props}
        ></input>
      </label>
    </div>
  );
};

export default FormField;
