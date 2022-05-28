import { useState } from "react";
import "../App.css";

const Input = ({ ...props }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className={"formInput"}>
      <input
        className="inputs-form shadow-btns"
        onChange={props.handlerBuyerData}
        {...props}
        onFocus={() => props.name === "phone" && setFocused(true)}
        onBlur={handleFocus}
        data-focused={focused.toString()}
      />
      <span className="errorMessage">{props.errormessage}</span>
    </div>
  );
};

export default Input;
