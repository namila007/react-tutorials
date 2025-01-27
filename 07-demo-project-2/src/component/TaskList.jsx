import Task from "./Task";
import React from "react";

export default function TaskList({ taskList, setTaskList, projectId }) {
  console.log("TaskList", taskList);
  // const inputRef = React.useRef(null);  // causes second update
  const [inputValue, setInputValue] = React.useState("");

  function addTask(e) {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setTaskList((prevState) => {
      return prevState.map((project, index) => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: [...project.tasks, inputValue],
          };
        }
        return project;
      });
    });
    setInputValue("");
  }

  function deleteTask(id) {
    console.log("Clear task", id);
    setTaskList((prevState) => {
      return prevState.map((project, index) => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: project.tasks.filter((task, taskIndex) => taskIndex !== id),
          };
        }
        return project;
      });
    });
  }

  return (
    <>
      <h2>Tasks</h2>
      <form onSubmit={addTask} className="flex gap-4 mb-6">
        <input
          className="flex-1 p-2 border rounded"
          type="text"
          // ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="text-blue-600 hover:text-blue-800">
          Add Task
        </button>
      </form>

      <table className="flex flex-grow">
        <tbody>
          {taskList &&
            taskList.map((task, index) => (
              <tr
                key={index}
                className="flex flex-row p-5 bg-stone-400 hover:bg-stone-200"
              >
                {console.log("Task", task, "index", index)}
                <Task clearTask={() => deleteTask(index)}>{task}</Task>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
