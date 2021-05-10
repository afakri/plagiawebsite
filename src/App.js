import React from "react";
import "./App.css";
import Inputfield from "./components/Inputfield";
import { useState } from "react";
import { detector } from "./components/detector";
import ResultBox from "./components/ResultBox";

function App() {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [pourcentage, setPourcentage] = useState("");

  return (
    <>
      <div className="inputs-container">
        <Inputfield transfer={setField1} holderText="Type in your code" />
        <div className="input-submit">
          <ResultBox pourcentage={pourcentage}/>
          <input type="submit" onClick={()=>setPourcentage(detector(field1,field2))}/>
        </div>

        <Inputfield
          transfer={setField2}
          holderText="Type in the stackoverflow code you found :)"
        />
      </div>
    </>
  );
}

export default App;
