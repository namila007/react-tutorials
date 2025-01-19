export function CustomInput({ title, inputType = "text", inputRef }) {
  return (
    <div className="m-2">
      <label className="text-sm font-bold uppercase text-stone-500">
        {title}
      </label>
      {inputType === "text-area" ? (
        <textarea
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          ref={inputRef}
        />
      ) : (
        <input
          type={inputType}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          ref={inputRef}
        />
      )}
    </div>
  );
}
