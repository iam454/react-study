import React from "react";
import { Fab, Icon } from "react-onsenui";

export default function FabExample() {
  return (
    <>
      <Fab position="bottom right">
        <Icon
          icon="fa-twitter"
          size={26}
          fixedWidth={false}
          style={{ verticalAlign: "middle" }}
        />
      </Fab>
    </>
  );
}
