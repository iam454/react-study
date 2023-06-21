import React from "react";
import { Button } from "react-onsenui";

export default function ButtonExample() {
  const handleClick = () => {
    alert("CLICKED!!");
  };
  return (
    <>
      <Button modifier="large--cta" onClick={handleClick}>
        Tap Me
      </Button>
      <br />
      <br />
      <Button disabled={true}>Don't Tap Me</Button>
      <br />
      <br />
      <Button modifier="outline" onClick={handleClick}>
        Modifier=outline
      </Button>
    </>
  );
}
