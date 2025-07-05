import React from "react";

function StudentInfo(props){
  return(
    <div style={{
      borderRadius: "10px",
      color: "wheat",
      background: "gray",
      margin: "10px",
      padding: "10px",
      width: "100%",
      height: "100%"
    }}>
     <h2>Student name: {props.name}</h2>
     <p>Age: {props.age}</p>
     <p>Class: {props.className}</p>

<div style={{
  width : "100px",
  height: "100px"
}}>


   
     <img 
          src={props.image} 
          alt={props.name} 
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%" 
       }} 
     />
     </div>
    </div>
  )
}
export default StudentInfo;