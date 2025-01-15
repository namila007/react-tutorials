import { useRef } from "react";

export default function Player({ player, setPlayer }) {
  // const [tempPlayer, setTempPlayer] = useState("");
  const playerName = useRef(null);

  function handlePlayerUpdate() {
    let t = playerName.current.value.trim();
    if (t) setPlayer(t);
    playerName.current.value = ""; //imperative react. not good practice
  }

  return (
    <section id="player">
      <h2>Welcome {player ?? "unknown player"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          // onChange={(e) => setTempPlayer(e.target.value)}
        />
        <button onClick={handlePlayerUpdate}>Set Name</button>
      </p>
    </section>
  );
}
