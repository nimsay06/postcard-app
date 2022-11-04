import { useState } from "react";

function ColorChange(props) {
  const [isInFocus, setIsInFocus] = useState(false);
  const divStyle = {
    height: isInFocus ? "6em" : "3em",
    width: isInFocus ? "6em" : "3em",
    fontSize: "20px",
    cursor: "pointer",
    borderRadius: isInFocus ? "68% 32% 67% 33% / 26% 52% 48% 74% " : "50%",
    backgroundColor: isInFocus ? "#e0181f" : "black",
    color: isInFocus ? "#51e051" : "#4366e6",
  };
  const { children } = props;

  return (
    <div
      style={divStyle}
      className={`container ${isInFocus ? "is-in-focus" : ""}`}
      onMouseOver={() => setIsInFocus(true)}
      onMouseOut={() => setIsInFocus(false)}
    >
      {children}
    </div>
  );
}

export default ColorChange;
