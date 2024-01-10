import React from "react";
import Button from "./Button";

function ButtonsList() {
  const buttonItems = [
    "All",
    "Sports",
    "Subscribe",
    "Music",
  
    "Mca",
  ];
  return (
    <div className="flex overflow-x-auto space-x-4">
      {buttonItems.map((buttonitem,index) => (
        <Button name={buttonitem}  key={index}/>
      ))}
    </div>
  );
}

export default ButtonsList;
