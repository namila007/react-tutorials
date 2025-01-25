export default function Task({ children, clearTask }) {
  return (
    <>
      <td className="flex-grow pr-4">{children}</td>
      <td className="flex-auto ">
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
