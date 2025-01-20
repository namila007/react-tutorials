import Task from "./Task";

export default function TaskList({ taskList, setTaskList, projectId }) {
  console.log("TaskList", taskList);

  function deleteTask(id) {
    console.log("Clear task", id);
    setTaskList((prevState) => {
      return prevState.map((project, index) => {
        if (index === projectId) {
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
      <table>
        <tbody>
          {taskList.map((task, index) => (
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
