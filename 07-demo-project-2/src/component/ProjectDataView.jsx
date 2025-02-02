export function ProjectDataView({ item, children, handleDelete }) {
  console.log("ProjectDataView", item);
  const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="view-card m-3">
      <header className="mb-5">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-stone-700 my-2 text-center uppercase ">
            {item.name}
          </h1>
          <button
            onClick={handleDelete}
            className="text-sm text-red-400 font-bold border-2 border-red-400 px-2 py-2 rounded uppercase hover:text-red-800 justify-end"
          >
            Delete
          </button>
        </div>

        <p className="mb-4 text-m text-stone-500">{formattedDate}</p>
        <p className=" text-stone-700 whitespace-pre-wrap">
          {item.description}
        </p>
      </header>
      {children}
    </div>
  );
}
