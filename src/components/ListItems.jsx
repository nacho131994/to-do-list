import React, { useState } from "react";
import "../components/ListItems.css";

const ListItems = (props) => {
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
              <i
                className="fa-solid fa-x"
                onClick={() => props.handleDeleteTodo(index)}
              ></i>
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
    </div>
  );
};

export default ListItems;
