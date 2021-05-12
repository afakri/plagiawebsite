import React from "react";
import "./App.css";
import Inputfield from "./components/Inputfield";
import { useState } from "react";
import { detector } from "./components/detector";
import ResultBox from "./components/ResultBox";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import NavBar from "./components/NavBar"

function App() {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [info, setInfo] = useState({
    pourcentage: 0,
    message: "Hey :)",
    type: "light",
  });

  function messageMaker(pourcentage) {
    if (pourcentage < 30) {
      return "Looks good to me.";
    } else if (pourcentage > 50) {
      return "Better chill with copy and past buddy!";
    } else {
      return "Change some variable names man.";
    }
  }
  function typeMaker(pourcentage) {
    if (pourcentage < 30) {
      return "success";
    } else if (pourcentage > 50) {
      return "danger";
    } else {
      return "warning";
    }
  }
  function test(f1, f2) {
    const po = detector(field1, field2);
    const m = messageMaker(po);
    const t = typeMaker(po);
    console.log(t)
    setInfo({
      pourcentage: po,
      message: m,
      type: t,
    });
  }
  return (
    <>
    <NavBar/>
      <div className="inputs-container">
        <Inputfield transfer={setField1} holderText="Type in your code" />
        <div className="input-submit">
          <ResultBox data={info} />
          <Button
            className="submit-button"
            variant="outline-primary"
            size="lg"
            block
            onClick={() => test(field1, field2)}
          >
            Scan
          </Button>
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
