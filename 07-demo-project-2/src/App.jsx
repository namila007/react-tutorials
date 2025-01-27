import { ProjectSideView } from "./component/ProjectSideView.jsx";
import { useState } from "react";
import { CreateProject } from "./component/CreateProject.jsx";
import { NoSelectedProject } from "./component/NoSelectedProject.jsx";
import TaskList from "./component/TaskList.jsx";
import { ProjectDataView } from "./component/ProjectDataView.jsx";

const startProjects = [
  {
    id: 2,
    name: "Project 0",
    description: "description",
    date: Date.now(),
    tasks: ["aaa", "aaaaa"],
  },
  {
    id: 3,
    name: "Project 1",
    description: "description2",
    date: Date.now(),
    tasks: [],
  },
];

function App() {
  const [projects, setProjects] = useState(startProjects);
  const [showCreateProjectView, setShowCreateProjectView] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  console.log("App", projects);
  console.log(showCreateProjectView);
  const projectData = selectedProject
    ? projects.find((item) => item.id === selectedProject)
    : null;
  console.log("projectData", projectData);
  function onProjectClick(id) {
    console.log("Project clicked", id);
    setSelectedProject(id);
  }

  function handleCreateView(isVisible) {
    setSelectedProject(null);
    setShowCreateProjectView(isVisible);
  }

  function deleteProject() {
    console.log("delete project");
    setProjects((p) => {
      return p.filter((item, index) => item.id !== selectedProject);
    });
    setSelectedProject(null);
  }

  return (
    <main className="h-screen flex gap-2">
      {/*{sidebar}*/}
      <ProjectSideView
        items={projects}
        selectedProjectId={selectedProject}
        handleCreatebtn={handleCreateView}
        onProjectClick={onProjectClick}
      />
      {/*<ProjectDataView item={projects[1]}>dd</ProjectDataView>*/}
      {showCreateProjectView && (
        <CreateProject
          setItems={setProjects}
          isVisible={handleCreateView}
        ></CreateProject>
      )}
      {/*if nothing selected */}
      {!showCreateProjectView && selectedProject === null && (
        <NoSelectedProject action={() => handleCreateView(true)} />
      )}
      {!showCreateProjectView && selectedProject !== null && (
        <ProjectDataView item={projectData} handleDelete={deleteProject}>
          <TaskList
            taskList={projectData?.tasks}
            setTaskList={setProjects}
            projectId={selectedProject}
          />
        </ProjectDataView>
      )}
    </main>
  );
}

export default App;
