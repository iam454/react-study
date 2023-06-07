import React from "react";

export default function Event() {
  const handleButtonClick = (e) => {
    console.dir(e);
    console.log("HELLO");
  };

  const handleClickCapture = () => {
    console.log("Capture!");
  };

  const handleClickCapture2 = () => {
    console.log("Capture2!!");
  };
  const handleClickBubble = () => {
    console.log("Bubble Bubble");
  };

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick}>Button</button>
      </div>
    </div>
  );
}
