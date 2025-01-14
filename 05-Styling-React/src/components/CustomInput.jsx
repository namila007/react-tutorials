// import { styled } from "styled-components";
//
// const Label = styled.label`
//   display: block;
//   margin-bottom: 0.5rem;
//   font-size: 0.75rem;
//   font-weight: 700;
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
//   color: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
// `;
//
// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem 1rem;
//   line-height: 1.5;
//   background-color: ${({ $invalid }) => ($invalid ? "#fed2d2" : "#d1d5db")};
//   color: ${({ $invalid }) => ($invalid ? "#f87171" : "#374151")};
//   border: 1px solid transparent;
//   border-color: ${({ $invalid }) => ($invalid ? "#f73f3f" : undefined)};
//   border-radius: 0.25rem;
//   box-shadow:
//     0 1px 3px 0 rgba(0, 0, 0, 0.1),
//     0 1px 2px 0 rgba(0, 0, 0, 0.06);
// `;

export default function CustomInput({ invalid, label, ...props }) {
  let textColour = invalid ? "text-red-500" : "text-stone-800";
  let bgColour = invalid ? "bg-red-300 border-red-900" : "bg-stone-300";
  return (
    <p>
      <label
        className={`block mb-2 text-xs font-bold tracking-wide ${textColour} uppercase`}
      >
        {label}
      </label>
      <input
        className={`w-full px-3 py-2 mb-2.5 leading-tight ${textColour} border rounded shadow ${bgColour}`}
        {...props}
      />
    </p>
  );
}
