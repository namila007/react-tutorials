import { ProjectSideView } from "./component/ProjectSideView.jsx";
import { useState } from "react";
import { ProjectDataView } from "./component/ProjectDataView.jsx";
import { CreateProject } from "./component/CreateProject.jsx";
import TaskList from "./component/TaskList.jsx";

const startProjects = [
  {
    id: 0,
    name: "Project 0",
    description: "description",
    date: Date.now(),
    tasks: ["aaa", "aaaaa"],
  },
  {
    id: 1,
    name: "Project 1",
    description: "description2",
    date: Date.now(),
    tasks: [],
  },
];

function App() {
  const [items, setItems] = useState(startProjects);
  const [showCreatProjectView, setShowCreatProjectView] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);
  console.log("App", items);
  console.log(showCreatProjectView);

  function onProjectClick(id) {
    console.log("Project clicked", id);
    setSelectedProject(id);
  }

  function handleCreateView(isVisible) {
    setShowCreatProjectView(isVisible);
  }

  return (
    <div className="flex flex-grow h-screen bg-gray-100">
      {/*{sidebar}*/}
      <ProjectSideView
        items={items}
        selectedProjectId={selectedProject}
        handleCreatebtn={handleCreateView}
        onProjectClick={onProjectClick}
      />
      {/*<ProjectDataView item={items[1]}>dd</ProjectDataView>*/}
      {showCreatProjectView && (
        <CreateProject
          setItems={setItems}
          isVisible={handleCreateView}
        ></CreateProject>
      )}
      {/*</section>*/}
      {!showCreatProjectView && (
        <ProjectDataView item={items[selectedProject]}>
          <TaskList
            taskList={items[selectedProject].tasks}
            setTaskList={setItems}
            projectId={selectedProject}
          />
        </ProjectDataView>
      )}
    </div>
  );
}

export default App;
