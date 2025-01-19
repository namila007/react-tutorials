import { CustomInput } from "./CustomInput.jsx";
import { useRef } from "react";

export function CreateProject({ setItems, isVisible }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  function addProject() {
    setItems((p) => {
      return [
        ...p,
        {
          id: p.length,
          name: titleRef.current.value,
          description: descriptionRef.current.value,
          date: dateRef.current.value,
        },
      ];
    });
    isVisible(false);
  }

  return (
    <div className="bg-gray-100 p-6 flex-grow rounded-lg shadow-md">
      <div className="p-3">
        <button className="m-2" onClick={() => isVisible(false)}>
          {" "}
          Cancel
        </button>
        <button
          className="px-5 py-2 text-xs md:text-base rounded-md bg-stone-900 text-stone-100 hover:bg-stone-600 hover:text-stone-200"
          onClick={addProject}
        >
          Save
        </button>
      </div>
      <CustomInput title="Title" inputRef={titleRef} />
      <CustomInput
        title="Description"
        inputType="text-area"
        inputRef={descriptionRef}
      />
      <CustomInput title="Due Date" inputType="Date" inputRef={dateRef} />
    </div>
  );
}
