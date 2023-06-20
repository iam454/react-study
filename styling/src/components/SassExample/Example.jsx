import React from "react";
import "./Example.scss";

export default function Example() {
  return (
    <>
      <div>
        <p>Example</p>
        <p className="font">Example</p>
      </div>
      <nav>
        <ul>
          <li>Test</li>
          <li>
            <a>Test</a>
          </li>
        </ul>
      </nav>
      <p className="base">use Base</p>
      <p className="inverse">use Base</p>
      <p className="info">use Mixin</p>
      <p className="alert">use Mixin</p>
      <p className="success">use Mixin</p>
      <p className="message">Extends</p>
      <p className="success2">Extends</p>
      <p className="error">Extends</p>
      <p className="warning">Extends</p>
      <p className="square-av">if</p>
      <p className="circle-av">if</p>
      <p className="sidebar">function</p>
    </>
  );
}
