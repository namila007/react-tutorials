import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

const modal = forwardRef(function DialogModel({ children }, ref) {
  const localRef = useRef(null);
  useImperativeHandle(ref, () => ({
    open() {
      localRef.current.showModal();
    },
    close() {
      localRef.current.close();
    },
  }));

  return createPortal(
    <dialog
      className=" backdrop:bg-stone-900/90 p-4 rounded-md shadow-md w-1/3 max-w-lg"
      ref={localRef}
    >
      {children}
      <form className="mt-4 flex justify-end" method="dialog">
        <button
          className="bg-stone-800 text-white px-4 py-2 rounded uppercase hover:bg-stone-500"
          onClick={() => localRef.current.close()}
        >
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default modal;
