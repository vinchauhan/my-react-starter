/* src/content.js */
import React from "react";
import ReactDOM from "react-dom";
import "./content.css";

class Main extends React.Component {
  render() {
    return (
      <div className={"my-extension"}>
        <h1>Hello world - My first Extension</h1>
      </div>
    );
  }
}

const app = document.createElement("div");
app.id = "my-extension-root";
const viewPortDiv = document.getElementById("viewport");
//document.body.appendChild(app);
console.error(viewPortDiv);
$(document).ready(function() {
  ReactDOM.render(<Main />, viewPortDiv);
});
