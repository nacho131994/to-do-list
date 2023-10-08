import React from "react";

const Searchbar = (props) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      props.handleAddTodos();
    }
  };
  return (
    <div className="input-section">
      <input
        placeholder="add a task"
        onChange={(e) => props.setInputText(e.target.value)}
        onKeyPress={handleKeyPress}
        value={props.inputText}
        className={`input-section-input ${
          props.isDark ? "input-dark-style" : ""
        }`}
      />

      <button
        onClick={props.handleAddTodos}
        className={`save-button ${
          props.isDark ? "save-button-dark-style" : ""
        }`}
      >
        SAVE{" "}
      </button>
    </div>
  );
};

export default Searchbar;
