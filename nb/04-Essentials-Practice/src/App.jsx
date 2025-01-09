import { useState } from "react";
import { UserInputGroup } from "./component/UserInputGroup.jsx";
import { Header } from "./component/Header.jsx";
import { CalculatedTable } from "./component/CalculatedTable.jsx";

function App() {
  const [value, setValue] = useState({});
  const isValidDuration = value.duration >= 0;
  return (
    <>
      <Header />
      <UserInputGroup stateValue={value} setstateValue={setValue} />
      {!isValidDuration && (
        <p className="center">Duration Cannot be Negative</p>
      )}
      {isValidDuration && <CalculatedTable resultsData={value} />}
    </>
  );
}

export default App;
