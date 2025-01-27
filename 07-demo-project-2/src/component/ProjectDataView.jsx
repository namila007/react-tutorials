export function ProjectDataView({ item, children, handleDelete }) {
  console.log("ProjectDataView", item);
  const formattedDate = new Date(item.date).toLocaleDateString();

  return (
    <div className="view-card">
      <header>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-stone-700 my-4 text-center uppercase ">
            {item.name}
          </h1>
          <button
            onClick={handleDelete}
            className=" text-red-400 font-bold border-2 border-red-400 px-4 py-2 rounded uppercase hover:text-red-800 justify-end"
          >
            Delete
          </button>
        </div>
      </header>
      <p>{formattedDate}</p>
      <p>{item.description}</p>
      {children}
    </div>
  );
}
