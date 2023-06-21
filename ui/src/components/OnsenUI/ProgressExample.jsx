import React from "react";
import { ProgressBar, ProgressCircular } from "react-onsenui";

export default function ProgressExample() {
  return (
    <>
      <ProgressBar indeterminate />
      <ProgressCircular indeterminate />
      <ProgressCircular value={55} secondaryValue={87} />
    </>
  );
}
