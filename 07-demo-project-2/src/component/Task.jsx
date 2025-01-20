export default function Task({ children, clearTask }) {
  return (
    <>
      <td className="basis-1/2 pr-4">{children}</td>
      <td className="basis-1/4">
        <button
          className="text-stone-700 hover:text-stone-950 ml-4"
          onClick={clearTask}
        >
          Clear
        </button>
      </td>
    </>
  );
}
