export function ProjectDataView({ item, children }) {
  return (
    <>
      <label className="text-sm font-bold uppercase text-stone-500">
        {item.title}
      </label>
      <p>{item.date}</p>
      <p>{item.description}</p>
      {children}
    </>
  );
}
