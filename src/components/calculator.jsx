import React, { useState } from "react";
import "./calculator.scss";

function Calculator() {
  const [value, setValue] = useState("0");
  const [error, setError] = useState("");

  const handleButtonClick = (e) => {
    try {
      if (value === "0" && e.target.value !== "AC" && e.target.value !== "DE") {
        setValue(e.target.value);
      } else if (e.target.value === "=") {
        setValue(eval(value));
      } else if (e.target.value === "AC") {
        setValue("0");
        setError("");
      } else if (e.target.value === "DE") {
        if (value.length === 1) {
          setValue("0");
        } else {
          setValue(value.slice(0, -1));
        }
        setError("");
      } else {
        setValue(value + e.target.value);
        setError("");
      }
    } catch (err) {
      setError("Error");
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Calculator</h1>
      <div className="calculator">
        <form action="">
          <div className="display">
            <input
              type="text"
              value={error || value}
              className="display"
              readOnly
            />
          </div>
          <div>
            <input
              type="button"
              value="AC"
              onClick={handleButtonClick}
              className="ops"
            />
            <input
              type="button"
              value="DE"
              onClick={handleButtonClick}
              className="ops"
            />
            <input
              type="button"
              value="."
              onClick={handleButtonClick}
              className="ops"
            />
            <input
              type="button"
              value="/"
              onClick={handleButtonClick}
              className="ops"
            />
          </div>
          <div>
            <input
              type="button"
              value="7"
              onClick={handleButtonClick}
              className="number"
            />
            <input
              type="button"
              value="8"
              onClick={handleButtonClick}
              className="number"
            />
            <input
              type="button"
              value="9"
              onClick={handleButtonClick}
              className="number"
            />
            <input
              type="button"
              value="*"
              onClick={handleButtonClick}
              className="ops"
            />
          </div>
          <div>
            <input
              type="button"
              value="4"
              onClick={handleButtonClick}
              className="number"
            />
            <input
              type="button"
              value="5"
              onClick={handleButtonClick}
              className="number"
            />
            <input
              type="button"
              value="6"
              onClick={handleButtonClick}
              className="number"
            />
            <input
              type="button"
              value="+"
              onClick={handleButtonClick}
              className="ops"
            />
          </div>
          <div>
            <input
              type="button"
              value="1"
              onClick={handleButtonClick}
              className="number"
            />
            <input
              type="button"
              value="2"
              onClick={handleButtonClick}
              className="number"
            />
            <input
              type="button"
              value="3"
              onClick={handleButtonClick}
              className="number"
            />
            <input
              type="button"
              value="-"
              onClick={handleButtonClick}
              className="ops"
            />
          </div>
          <div>
            <input
              type="button"
              value="0"
              onClick={handleButtonClick}
              className="number"
            />
            <input
              type="button"
              value="="
              className="equal"
              onClick={handleButtonClick}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Calculator;
