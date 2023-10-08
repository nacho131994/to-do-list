import React, { useState } from "react";
//STYLES
import "../components/EditTask.css";
const EditTask = (props) => {
  return (
    <div className="edit-task-overlay">
      <div
        className={`edit-task-container ${
          props.isDark ? "edit-task-container-dark-style" : ""
        }`}
      >
        <div className="edit-task-body">
          <p>EDIT YOUR TASK</p>
          <input
            type="text"
            className={props.isDark ? "edit-task-item-dark-style" : ""}
          />
        </div>

        <div className="edit-task-buttons">
          <button>SAVE</button>
          <button onClick={props.handleCloseEdit}>CANCEL</button>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
