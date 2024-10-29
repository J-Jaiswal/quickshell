import React from "react";
import KanbanBoard from "../src/components/KanbanBoard";
import "./App.css";
import Priority from "./components/Priority";

const App = () => {
  return (
    <div className="app-container">
      {/* <Priority /> */}
      <KanbanBoard />
    </div>
  );
};

export default App;
