import { UserInput } from "./UserInput.jsx";

export function UserInputGroup({ stateValue, setstateValue }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          value={stateValue.initialInvestment}
          setValue={(e) =>
            setstateValue((prev) => {
              let newValue = { ...prev };
              newValue.initialInvestment = parseInt(e);
              return newValue;
            })
          }
        >
          Initial Investment
        </UserInput>
        <UserInput
          value={stateValue.annualInvestment}
          setValue={(e) =>
            setstateValue((prev) => {
              let newValue = { ...prev };
              newValue.annualInvestment = parseInt(e);
              return newValue;
            })
          }
        >
          Annual Investment
        </UserInput>
      </div>
      <div className="input-group">
        <UserInput
          value={stateValue.expectedReturn}
          setValue={(e) =>
            setstateValue((prev) => {
              let newValue = { ...prev };
              newValue.expectedReturn = parseInt(e);
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
              newValue.duration = parseInt(e);
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
