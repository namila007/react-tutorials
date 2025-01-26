import CustomInput from "./CustomInput.jsx";
import { useRef } from "react";

export function CreateProject({ setItems, isVisible }) {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dateRef = useRef(null);

  function addProject() {
    if (!validate()) return;
    setItems((p) => {
      return [
        ...p,
        {
          id: p.length,
          name: titleRef.current.value,
          description: descriptionRef.current.value,
          date: dateRef.current.value,
          tasks: [],
        },
      ];
    });
    isVisible(false);
  }

  function validate() {
    if (titleRef.current.value.length === 0) {
      //todo: add error message
      alert("Title is required");
      return false;
    }
    if (descriptionRef.current.value.length === 0) {
      alert("Description is required");
      return false;
    }
    if (dateRef.current.value.length === 0) {
      alert("Date is required");
      return false;
    }
    return true;
  }

  return (
    <div className="view-card">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            className="text-stone-800 hover:text-gray-500"
            onClick={() => isVisible(false)}
          >
            Cancel
          </button>
        </li>
        <li>
          <button className="action-buttons" onClick={addProject}>
            Save
          </button>
        </li>
      </menu>
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
