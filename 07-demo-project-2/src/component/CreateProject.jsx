import CustomInput from "./CustomInput.jsx";
import { useRef, useState } from "react";
import DialogModel from "./DialogModel.jsx";
import { hashGenerator } from "../util/HashGenerator.js";

export function CreateProject({ setItems, isVisible }) {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dateRef = useRef(null);
  const dialogRef = useRef(null);
  const [message, setMessage] = useState(null);

  function addProject() {
    if (!validate()) {
      dialogRef.current.open();
      return;
    }
    dialogRef.current.close();
    setItems((p) => {
      return [
        ...p,
        {
          id: hashGenerator(
            titleRef.current.value,
            descriptionRef.current.value,
            dateRef.current.value,
          ),
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
    if (titleRef.current === null || titleRef.current.value.length === 0) {
      //todo: add error message
      setMessage("Title");
      return false;
    }
    if (
      descriptionRef.current === null ||
      descriptionRef.current.value.length === 0
    ) {
      setMessage("Description");
      return false;
    }
    if (dateRef.current === null || dateRef.current.value.length === 0) {
      setMessage("Date");
      return false;
    }
    return true;
  }

  return (
    <>
      {" "}
      <DialogModel ref={dialogRef}>
        {" "}
        <h2 className="text-stone-800 font-bold p-2 text-center">
          Value is Missing
        </h2>
        <p className="text-stone-500 p-2 mt-2 mb-2 "> {message} is required </p>{" "}
      </DialogModel>
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
        <CustomInput title="Title" ref={titleRef} />
        <CustomInput
          title="Description"
          inputType="text-area"
          ref={descriptionRef}
        />
        <CustomInput title="Due Date" inputType="Date" ref={dateRef} />
      </div>
    </>
  );
}
