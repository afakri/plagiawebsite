import React from "react";
import "./App.css";
import InputField from "./components/Inputfield";
import Header from "./components/Header";


function App() {
  
  return (
    <div className="App">
      
      <div className="container">
      <Header />
      </div>
      <div className="inputs">
        <div className="texts">
          <InputField className="text1" />
          <InputField className='text2'/> 
        </div>
        <div className="submit">
            <button style={{width:"300px",height:"50px",backgroundColor:"black",color:"white",fontSize:"20px"}}>compare</button>
        </div>
      </div>
      
      
      
      
      
    </div>
  );
}

export default App;
