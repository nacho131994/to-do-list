import React, { useState } from "react";
import Title from "./components/Title.jsx";
import List from "./components/List";

import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleButtonClick = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={`app-container ${isDark ? "app-container-dark-style" : ""}`}
    >
      <Title onButtonClick={handleButtonClick} isDark={isDark} />
      <List isDark={isDark} />
    </div>
  );
}

export default App;
