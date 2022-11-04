import { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [selectState, setSelectState] = useState("vanilla");
  const formStyle = {
    height: "20em",
    width: "25em",
    color: "yellow",
    margin: "5em",
    fontSize: "30px",
    backgroundImage:
      "url('https://images.pexels.com/photos/7846430/pexels-photo-7846430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
    backgroundRepeat: "none",
    backgroundSize: "contain",
  };

  const selectStyle = {
    width: "15em",
    height: "2em",
    borderRadius: "10px",
  };

  return (
    <div style={formStyle}>
      <form>
        <label>Enter Your Name</label>
        <br />
        <input
          type="text"
          name="personName"
          id="personName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <p>Chose your favorite ice cream flavour?</p>
        <select
          style={selectStyle}
          value={selectState}
          onChange={(e) => setSelectState(e.target.value)}
        >
          <option value="vanilla">Vanilla</option>
          <option value="chocolate">Chocolate</option>
          <option value="strawberry">Strawberry</option>
          <option value="lemon">Lemon</option>
        </select>
      </form>

      <br />
      <p>
        {name}'s favorite flavour is {selectState}
      </p>
    </div>
  );
}

export default Form;
