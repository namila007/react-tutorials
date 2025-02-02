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
      <hr className="border-t-1 border-stone-500" />
      <h2 className="font-bold  mt-5 pb-3 text-stone-700 uppercase font-sans">
        Tasks
      </h2>
      <form onSubmit={addTask} className="flex gap-4 mb-6">
        <input
          className="flex-1 p-2 border rounded hover:border-blue-500 focus:outline-none focus:border-blue-600 shadow-md"
          type="text"
          // ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="font-bold uppercase text-m  p-2 m-2 bg-blue-400 text-white hover:bg-blue-900 shadow-md shadow-blue-300b"
        >
          Add Task
        </button>
      </form>
      {taskList?.length > 0 && (
        <ul className="max-width-custom p-4 rounded-md  ">
          {taskList.map((task, index) => (
            <li
              key={index}
              className=" justify-between flex p-3 my-2 whitespace-pre-wrap break-words rounded-2xl
               bg-amber-100
               hover:bg-amber-400 shadow-md"
            >
              {console.log("Task", task, "index", index)}
              <Task clearTask={() => deleteTask(index)}>{task}</Task>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
