import React from "react";
import AlertMessage from "./AlertMessage";
function ResultBox(props) {
  return (
    <>
      <AlertMessage message = {props.data.message} type = {props.data.type} className="alert"/>
      <div className="result">{props.data.pourcentage}%</div>
    </>
  );
}

export default ResultBox;
