import React from "react";
import SideBar from "./SideBar";
import MainContaier from "./MainContaier";

function Body() {
  return (
    <div className="flex">
      <SideBar />
      <MainContaier />
    </div>
  );
}

export default Body;
