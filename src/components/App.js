import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);

  function onDelete(taskToRemove){
    setTasks(prevTasks => prevTasks.filter(task => task !== taskToRemove));
  };

  function setFilteredTasks(filteredTasks){
    setTasks(filteredTasks);
  };

  function onTaskFormSubmit(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} tasks={tasks} setFilteredTasks={setFilteredTasks}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasks} categories={CATEGORIES} onDelete={onDelete} /> 
    </div>
  );
}

export default App;

