import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import $ from "jquery";

var rallyPokerDiv = `<div id="rally-poker">
        <button style="background-color: #FF334F;border: none;color: white;padding: 10px 25px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;" onClick="rallyFyEngagement()">
            Rallyfy
        </button>
   </div>`;
// var viewPortDiv = document.getElementById("viewport");

// viewPortDiv.insertAdjacentHTML("afterend", rallyPokerDiv);

// if (document.readyState === "ready" || document.readyState === "complete") {
//   console.error("ready");
// } else {
//   document.onreadystatechange = function() {
//     if (document.readyState == "complete") {
//       var viewPortDiv = document.getElementById("viewport");

//       viewPortDiv.insertAdjacentHTML("afterend", rallyPokerDiv);
//       ReactDOM.render(<App />, document.getElementById("rally-poker"));
//     }
//   };
// }

$(document).ready(function() {
  var viewPortDiv = document.getElementById("viewport");

  viewPortDiv.insertAdjacentHTML("afterend", rallyPokerDiv);
  ReactDOM.render(<App />, document.getElementById("rally-poker"));

  //ReactDOM.render(<App />, document.getElementById("viewport"));
});
