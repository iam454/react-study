import React from "react";
import { Page } from "react-onsenui";
import ButtonExample from "./ButtonExample";
import ActionSheetExample from "./ActionSheetExample";
import CheckboxExample from "./CheckboxExample";
import FabExample from "./FabExample";
import ListExample from "./ListExample";
import ProgressExample from "./ProgressExample";
import AlertExample from "./AlertExample";

export default function OnsenUIExample() {
  return (
    <Page>
      <ButtonExample />
      <ActionSheetExample />
      <CheckboxExample />
      <FabExample />
      <ListExample />
      <ProgressExample />
      <AlertExample />
    </Page>
  );
}
