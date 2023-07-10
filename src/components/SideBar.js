import React from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";

function SideBar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className=" p-2 shadow-lg w-48">
      <h1 className="font-bold py-5">Subscriptions</h1>
      <ul>
        <li>🎵 Music</li>
        <li>🏋🏼‍♂️ Sports</li>
        <li>🎬 Movie</li>
      </ul>
      <h1 className="font-bold py-5">Music</h1>
      <ul>
        <li>🎵 Music</li>
        <li>🏋🏼‍♂️ Sports</li>
        <li>🎬 Movies</li>
      </ul>
      <h1 className="font-bold py-5">Sports</h1>
      <ul>
        <li>🎵 Music</li>
        <li>🏋🏼‍♂️ Sports</li>
        <li>🎬 Movies</li>
      </ul>
    </div>
  );
}

export default SideBar;
