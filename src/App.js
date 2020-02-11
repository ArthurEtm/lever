import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MsgToArt from "./components/MsgToArt";
import StateExample from "./components/StateExample"; //here we import component
import Lever from "./components/Lever";

function App() {
  return (
    <div>
      <hr />
      <p className="text-center">Art's component</p>
      <hr />
      <Lever />
      <StateExample />
      <MsgToArt />
    </div>
  );
}

export default App;
