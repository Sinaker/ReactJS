import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function togglePlayer() {
    setActivePlayer((activePlayer) => (activePlayer === "X" ? "O" : "X"));
  }
  return (
    <menu>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={togglePlayer} activePlayer={activePlayer} />
      </div>
    </menu>
  );
}

export default App;
