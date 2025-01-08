import { UserInput } from "./UserInput.jsx";

export function UserInputGroup({ stateValue, setstateValue }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          value={stateValue.initial}
          setValue={(e) =>
            setstateValue((prev) => {
              let newValue = { ...prev };
              newValue.initial = e;
              return newValue;
            })
          }
        >
          Initial Investment
        </UserInput>
        <UserInput
          value={stateValue.annual}
          setValue={(e) =>
            setstateValue((prev) => {
              let newValue = { ...prev };
              newValue.annual = e;
              return newValue;
            })
          }
        >
          Annual Investment
        </UserInput>
      </div>
      <div className="input-group">
        <UserInput
          value={stateValue.expected}
          setValue={(e) =>
            setstateValue((prev) => {
              let newValue = { ...prev };
              newValue.expected = e;
              return newValue;
            })
          }
        >
          Expected Return
        </UserInput>
        <UserInput
          value={stateValue.duration}
          setValue={(e) =>
            setstateValue((prev) => {
              let newValue = { ...prev };
              newValue.duration = e;
              return newValue;
            })
          }
        >
          Duration
        </UserInput>
      </div>
    </section>
  );
}
