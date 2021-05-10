import React from "react";
import { useState } from "react";

function ResultBox(props) {

  return <div className="result">{props.pourcentage}%</div>;
}

export default ResultBox;
