import png from "../assets/no-projects.png";
import { CreateProjectButton } from "./CreateProjectButton.jsx";

export function NoSelectedProject({ action }) {
  return (
    <div className="view-card text-center ">
      <img
        src={png}
        alt="No project selected"
        className="w-16 h-16 object-center object-contain mx-auto"
      />
      <h2 className="text-xl font-bold my-4 text-stone-900 uppercase">
        {" "}
        No Selected Project
      </h2>
      <p className="text-stone-600 capitalize">
        {" "}
        Select a Project or Create a new Project
      </p>
      <CreateProjectButton handler={action}>Create Project</CreateProjectButton>
    </div>
  );
}
