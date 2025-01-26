import { CreateProjectButton } from "./CreateProjectButton.jsx";

export function ProjectSideView({
  items,
  selectedProjectId,
  handleCreatebtn,
  onProjectClick,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 rounded-lg shadow-lg text-gray-50 md:w-72 rounded-r-xl">
      <h1 className="text-xl font-bold mb-6 uppercase md:text-xl text-stone-300">
        YOUR PROJECTS
      </h1>
      <CreateProjectButton handler={() => handleCreatebtn(true)}>
        {" "}
        + Add Project
      </CreateProjectButton>

      <ul className="mt-8">
        {items.map((item) => (
          <li key={item.id} className="mt-2 hover:bg-stone-100">
            <button
              className={`w-full text-left p-1 rounded-sm text-stone-200 ${
                selectedProjectId === item.id
                  ? "bg-stone-800"
                  : "hover:bg-stone-800"
              }`}
              onClick={() => onProjectClick(item.id)}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
