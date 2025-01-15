import Player from "./components/Player.jsx";
import { useState } from "react";

function App() {
  const [player, setPlayer] = useState("unknown entity");

  return (
    <>
      <Player player={player} setPlayer={setPlayer} />
      <div id="challenges"></div>
    </>
  );
}

export default App;
