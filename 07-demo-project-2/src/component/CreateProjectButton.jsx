export function CreateProjectButton({ handler, children, ...props }) {
  return (
    <button
      {...props}
      type={"button"}
      onClick={handler}
      className="m-2 px-4 py-2 text-xs md:text-base rounded-md bg-stone-800 text-stone-400 font-bold uppercase hover:bg-stone-500 hover:text-stone-100"
    >
      {children}
    </button>
  );
}
