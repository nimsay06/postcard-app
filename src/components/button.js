import { useState } from "react";

function ButtonComponent(props) {
  const [isPressed, setIsPressed] = useState(false);
  console.log(props);
  return (
    <div
      className="buttonContainer"
      style={{ backgroundColor: isPressed ? props.containerColor : "white" }}
    >
      <button
        style={{
          backgroundColor: isPressed ? props.bckgrndColor : "#928cde",
          color: isPressed ? props.textColor : "#EEEEEE",
          width: "200px",
          height: "80px",
          borderRadius: "15px",
        }}
        className={`container ${isPressed ? "is-in-focus" : ""}`}
        onClick={() => setIsPressed(true)}
      >
        Click here
      </button>
    </div>
  );
}

export default ButtonComponent;
