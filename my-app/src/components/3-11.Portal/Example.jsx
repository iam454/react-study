import React from "react";
import ThankyouDialog from "./ThankyouDialog";
import { createPortal } from "react-dom";

const Portal = (props) => {
  return createPortal(props.children, document.getElementById("portal"));
};

export default function Example() {
  return (
    <div>
      <Portal>
        <ThankyouDialog />
      </Portal>
      <div style={{ position: "absolute" }}>ㅋㅋ</div>
    </div>
  );
}
