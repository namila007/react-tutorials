export function ProjectSideView({
  items,
  selectedProjectId,
  handleCreatebtn,
  onProjectClick,
}) {
  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg text-gray-100 basis-1/4">
      <h1 className="text-xl font-bold mb-6">YOUR PROJECTS</h1>
      <button
        onClick={() => handleCreatebtn(true)}
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-800 text-stone-400 font-bold uppercase hover:bg-stone-500 hover:text-stone-100"
      >
        {" "}
        + Add Project
      </button>

      <ul className="mt-8">
        {items.map((item) => (
          <li key={item.id} className="m-1  mt-2 gap-2  hover:bg-stone-400">
            <div
              className={`p-2 rounded cursor-pointer ${
                selectedProjectId === item.id
                  ? "bg-gray-800"
                  : "hover:bg-gray-800"
              }`}
              onClick={() => onProjectClick(item.id)}
            >
              {item.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
