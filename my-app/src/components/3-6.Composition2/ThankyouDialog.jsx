import React from "react";
import Dialog from "./Dialog";

export default function ThankyouDialog() {
  return (
    <Dialog
      title={<h1 style={{ color: "purple" }}>WOW!</h1>}
      description="This is a composition"
      button={<button style={{ backgroundColor: "pink" }}>PINK</button>}
    />
  );
}
