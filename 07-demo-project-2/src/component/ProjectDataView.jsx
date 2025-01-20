export function ProjectDataView({ item, children }) {
  const formattedDate = new Date(item.date).toLocaleDateString();

  return (
    <div className=" bg-gray-100 p-6 flex-grow rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-stone-700 my-4">{item.name}</h2>
      <p>{formattedDate}</p>
      <p>{item.description}</p>
      {children}
    </div>
  );
}
