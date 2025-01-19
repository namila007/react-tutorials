export function ProjectSideView({ items, handleCreatebtn, onProjectClick }) {
  return (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg text-gray-100 basis-1/4">
      <h2 className="text-xl font-bold text-stone-700 my-4">Your Projects</h2>
      <button
        onClick={() => handleCreatebtn(true)}
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        {" "}
        + Add Project
      </button>

      <ul className="mt-8">
        {items.map((item) => (
          <li key={item.id} className="m-1  mt-2 gap-2  hover:bg-stone-400">
            <button onClick={() => onProjectClick(item.id)}>{item.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
