import React from "react";

function ChildComponent({ name }) {
  console.log("ChildComponent - render");
  return <p>ChildComponent </p>;
}

export default ChildComponent;
