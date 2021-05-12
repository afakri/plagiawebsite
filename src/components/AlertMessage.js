import React from "react";
import {useState} from 'react'
import { Alert } from "react-bootstrap";

function AlertMessage(props) {

    
    
    
  return (
      <>
      
    <div className="alert-message">
      <Alert  variant = {props.type} >
        {props.message}
      </Alert>
    </div>
    </>
  );
}

export default AlertMessage;
