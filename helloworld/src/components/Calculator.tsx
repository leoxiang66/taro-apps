import { Container } from "leo-react/dist/";
import React, { useState } from "react";

const Calculator = () => {
  const [currentInput, setCurrentInput] = useState(" ");
  const [previousInput, setPreviousInput] = useState("");
  const [operation, setOperation] = useState(null);

  const handleNumberClick = (number) => {
    setCurrentInput(currentInput + number);
  };

  const handleOperationClick = (op) => {
    setOperation(op);
    setPreviousInput(currentInput);
    setCurrentInput("");
  };

  const calculateResult = () => {
    let result;
    switch (operation) {
      case "+":
        result = parseFloat(previousInput) + parseFloat(currentInput);
        break;
      case "-":
        result = parseFloat(previousInput) - parseFloat(currentInput);
        break;
      case "*":
        result = parseFloat(previousInput) * parseFloat(currentInput);
        break;
      case "/":
        result = parseFloat(previousInput) / parseFloat(currentInput);
        break;
      default:
        return;
    }
    setCurrentInput(result.toString());
    setOperation(null);
    setPreviousInput("");
  };

  const handleClear = () => {
    setCurrentInput("");
    setPreviousInput("");
    setOperation(null);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <div
        style={{ marginBottom: "20px", fontSize: "20px", textAlign: "right" }}
      >
        {previousInput} {operation} {currentInput} {"<"}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "C", 0, "="].map((item) =>
          Button(item, handleClear, calculateResult, handleNumberClick)
        )}
        {Button2(handleOperationClick, "+")}
        {Button2(handleOperationClick, "-")}
        {Button2(handleOperationClick, "*")}
        {Button2(handleOperationClick, "/")}
       
      </div>
    </div>
  );
};

export default Calculator;

function Button2(handleOperationClick: (op: any) => void, op: string) {
  return (
    <Container width="50px" height="70px">
      <button
        onClick={() => handleOperationClick(op)}
        style={{ fontSize: "20px", padding: "10px" }}
      >
        {op}
      </button>
    </Container>
  );
}

function Button(
  item: string | number,
  handleClear: () => void,
  calculateResult: () => void,
  handleNumberClick: (number: any) => void
) {
  return (
    <Container width="50px" height="70px">
      <button
        key={item}
        onClick={() => {
          if (item === "C") {
            handleClear();
          } else if (item === "=") {
            calculateResult();
          } else {
            handleNumberClick(item.toString());
          }
        }}
        style={{ fontSize: "25px", padding: "10px" }}
      >
        {item}
      </button>
    </Container>
  );
}
