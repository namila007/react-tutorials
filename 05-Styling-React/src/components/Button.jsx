export function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-1 m-2 font-semibold uppercase rounded text-black  bg-amber-100 hover:bg-amber-800"
      {...props}
    >
      {children}
    </button>
  );
}
