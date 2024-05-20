import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete, categories }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} text={task.text} category={task.category} task={task} onDelete={onDelete} categories={categories} />
      ))}
    </div>
  );
}

export default TaskList;
