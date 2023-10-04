import React from "react";
// STYLES
import "../components/DeleteConfirmation.css";

const DeleteConfirmation = (props) => {
  const handleYesClick = () => {
    props.handleDeleteAllTasks();
    props.handleCloseConfirmation();
  };

  return (
    <div className="delete-confirmation-overlay">
      <div
        className={`delete-confirmation-container ${
          props.isDark ? "delete-confirmation-container-dark-style" : ""
        }`}
      >
        <div className="Delete-confirmation-body">
          Are you sure that you want to delete all the tasks?
        </div>
        <div className="delete-confirmation-buttons">
          <button onClick={handleYesClick}>YES</button>
          <button onClick={props.handleCloseConfirmation}>NO</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
