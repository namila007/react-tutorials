import { useState } from "react";
import { UserInputGroup } from "./component/UserInputGroup.jsx";
import { Header } from "./component/Header.jsx";

function App() {
  const [value, setValue] = useState({});
  return (
    <>
      <Header />
      <UserInputGroup stateValue={value} setstateValue={setValue} />
    </>
  );
}

export default App;
