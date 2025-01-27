import React from "react";

const inputF = React.forwardRef(function CustomInput(
  { title, inputType = "text" },
  ref,
) {
  const inputStyle =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {title}
      </label>
      {inputType === "text-area" ? (
        <textarea className={inputStyle} ref={ref} />
      ) : (
        <input type={inputType} className={inputStyle} ref={ref} />
      )}
    </p>
  );
});

export default inputF;
