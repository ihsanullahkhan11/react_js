import React from "react";
function StudentInfo(props){
 return(
  <div style={{
    borderRadius: "10px",
    padding: "10px",
    margin:   "10px",
    background: "gray",
    color: "wheat",
  
  }}>
    <img 
  src={props.image} 
  alt={props.name} 
  style={{
    width:'100px',
    height: '100px',
    borderRadius: '50%'
  }}
   
   />

   
      <h2>Student name: <br/> {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Class {props.className}</p>
  
  

  </div>
 )
}


   

export default StudentInfo;