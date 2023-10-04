import React from "react";
//STYLES
import "../components/Title.css";

function SearchBar(props) {
  return (
    <div
      className={`title-container ${
        props.isDark ? "title-container-dark-style" : ""
      }`}
    >
      <h1>TO DO LIST</h1>
      <i
        class="fa-solid fa-circle-half-stroke"
        onClick={props.onButtonClick}
      ></i>
    </div>
  );
}

export default SearchBar;
