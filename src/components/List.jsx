import React, { useState, useEffect } from "react";
//STYLES
import "../components/List.css";
import "../components/Searchbar.css";
//COMPONENTS
import ListItems from "./ListItems.jsx";
import Searchbar from "./Searchbar.jsx";
import DeleteConfirmation from "../components/DeleteConfirmation";

const List = (props) => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleAddTodos = () => {
    if (inputText !== "") {
      const newTodos = [...todos, inputText];
      setTodos(newTodos);
      setInputText("");
      saveTodosToLocalStorage(newTodos);
    }
  };
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    saveTodosToLocalStorage(newTodos);
  };
  const handleDeleteAllTasks = () => {
    setTodos([]);
    localStorage.removeItem("todos");
  };

  const handleShowConfirmation = () => {
    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  console.log(typeof todos, todos);

  return (
    <div className={`list-container ${props.isDark ? "black" : ""}`}>
      <div className="list-body">
        <Searchbar
          handleAddTodos={handleAddTodos}
          inputText={inputText}
          setInputText={setInputText}
          isDark={props.isDark}
        />

        <div
          className={`list-items-container ${
            props.isDark ? "list-items-container-dark-style" : ""
          }`}
        >
          <ListItems
            todos={todos}
            inputText={inputText}
            setInputText={setInputText}
            handleDeleteTodo={handleDeleteTodo}
            showConfirmation={showConfirmation}
            handleShowConfirmation={handleShowConfirmation}
            isDark={props.isDark}
          />

          <div
            className={`list-footer ${
              props.isDark ? "list-footer-dark-style" : ""
            }`}
          >
            {todos.length === 0 ? (
              ""
            ) : (
              <>
                <p>Tasks remaining: {todos.length}</p>{" "}
                <button
                  onClick={handleShowConfirmation}
                  className={`delete-all-tasks-button ${
                    props.isDark ? "delete-all-tasks-button-dark-style" : ""
                  }`}
                >
                  DELETE ALL TASKS
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {showConfirmation && (
        <DeleteConfirmation
          handleDeleteAllTasks={handleDeleteAllTasks}
          handleCloseConfirmation={handleCloseConfirmation}
          isDark={props.isDark}
          todos={todos}
        />
      )}
    </div>
  );
};
export default List;
