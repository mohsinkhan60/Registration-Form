/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import { useState } from "react";
import "./formInput.css";

export const FormInput = ({ label, errorMessege, onChange, id, ...input }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className="formInput" key={id}>
      <label>{label}</label>
      <input
        {...input}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => input.Props.name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessege}</span>
    </div>
  );
};

export default FormInput;
