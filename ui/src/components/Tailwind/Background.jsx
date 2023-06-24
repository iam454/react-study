import React from "react";

export default function Background() {
  return (
    <div style={{ height: 200 }}>
      <div style={{ height: "inherit" }} class="bg-sky-500/100"></div>
      <div style={{ height: "inherit" }} class="bg-sky-500/75"></div>
      <div style={{ height: "inherit" }} class="bg-sky-500/50"></div>
    </div>
  );
}
