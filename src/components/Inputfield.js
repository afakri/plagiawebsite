import React from "react";
const myStyle = {
    width:"600px",
    height:"600px",
    borderRadius:"10px",
    backgroundColor:"black",
    outline:"none",
    border:"none",
    color:"white",
    fontSize:"20px",
    margin:"20px",
    marginLeft:"65px",
    textAlign:"top",
    paddingLeft:"20px",
    paddingTop:"20px"
    
    

  }
const field =()=>(<form>
    <textarea placeholder="Text" style={myStyle}  ></textarea>    
                </form>);
export default field; 