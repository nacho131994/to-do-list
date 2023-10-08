import React, { useState } from "react";
//STYLES
import "../components/ListItems.css";
//COMPONENTS
import EditTask from "./EditTask";

const ListItems = (props) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleShowEdit = () => {
    setShowEdit(true);
  };
  const handleCloseEdit = () => {
    setShowEdit(false);
  };

  return (
    <div className="list-items">
      {props.todos.length !== 0 ? (
        <ul className="todos-list">
          {props.todos.map((todo, index) => (
            <div className="todo-section" key={index}>
              <p
                className={`todo-task ${props.isDark ? "todo-task-dark" : ""}`}
              >
                {todo}
              </p>
              <div className="tasks-buttons">
                <i
                  className="fa-solid fa-pen-to-square"
                  onClick={handleShowEdit}
                ></i>
                <i
                  className="fa-solid fa-x"
                  onClick={() => props.handleDeleteTodo(index)}
                ></i>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <>
          <div
            className={`no-tasks-to-be-done-message ${
              props.isDark ? "no-tasks-to-be-done-message-dark-style" : ""
            }`}
          >
            There are no tasks to be done.
            <br /> What a boring life!
          </div>
        </>
      )}
      {showEdit && (
        <EditTask isDark={props.isDark} handleCloseEdit={handleCloseEdit} />
      )}
    </div>
  );
};

export default ListItems;
