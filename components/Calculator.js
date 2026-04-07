import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  const handleClick = (value) => {
    if (value === "C") {
      setDisplay("0");
      return;
    }

    if (value === "=") {
      try {
        setDisplay(String(eval(display)));
      } catch {
        setDisplay("0");
        console.log("expression is not valid");
      }
      return;
    }

    setDisplay((prev) => {
      // regex to verify the value is from 0 to 9
      if (prev === "0" && /[0-9]/.test(value)) {
        return value;
      }

      return prev + value;
    });
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    "C",
    "=",
    "+",
  ];

  return (
    <div style={{ maxWidth: 260, margin: "20px auto", textAlign: "center" }}>
      <input
        type="text"
        value={display}
        readOnly
        style={{
          width: "100%",
          height: 67,
          fontSize: 18,
          marginBottom: 18,
          textAlign: "right",
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 8,
        }}>
        {buttons.map((btn) => (
          <button
            key={btn}
            type="button"
            onClick={() => handleClick(btn)}
            style={{ height: 67, fontSize: 18 }}>
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
