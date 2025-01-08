export function UserInput({ children, value = 0.0, setValue }) {
  return (
    <p>
      <label>{children}</label>
      <input
        type="number"
        required
        value={value}
        onChange={(e) => {
          console.log(e.target.value);
          return setValue(e.target.value);
        }}
      />
    </p>
  );
}
