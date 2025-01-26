export function ProjectDataView({ item, children }) {
  const formattedDate = new Date(item.date).toLocaleDateString();

  return (
    <div className="view-card">
      <h2 className="text-xl font-bold text-stone-700 my-4">{item.name}</h2>
      <p>{formattedDate}</p>
      <p>{item.description}</p>
      {children}
    </div>
  );
}
