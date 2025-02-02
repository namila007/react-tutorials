export default function Task({ children, clearTask }) {
  return (
    <>
      <span className="text-stone-800 font-sans font-semibold">{children}</span>
      <span className="">
        <button
          className="text-stone-500 font-bold text-sm border-stone-700 px-2 py-2 uppercase hover:text-red-500"
          onClick={clearTask}
        >
          Clear
        </button>
      </span>
    </>
  );
}
