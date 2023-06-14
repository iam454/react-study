import React from "react";
import PropTypes from "prop-types";

function PropComponent(props) {
  return <div>{props.name}</div>;
}

// 기본값 부여
PropComponent.defaultProps = {
  name: "iam454",
  age: 8,
  email: "realseogy",
};

// props의 type 확인
PropComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
  email: function (props, propName, componentName) {
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(props[propName])) {
      return new Error(
        "Invalid prop `" +
          propName +
          "` supplied to" +
          " `" +
          componentName +
          "`. Validation failed."
      );
    }
  },
};

export default function Component() {
  return (
    <div>
      <PropComponent />
    </div>
  );
}
