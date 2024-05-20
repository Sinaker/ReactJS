import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  function clickHandler() {
    setIsEditing((isEditing) => !isEditing);
    //Toggle state, React recommends to use a function, cuz of scheduling state update, does not immediately change it
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") setIsEditing(false);
  }
  function changeName(event) {
    //onClick return event object
    if (event.target.value) setPlayerName(event.target.value);
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            placeholder={playerName}
            onChange={isEditing ? changeName : null}
            // This will only activate on clicking Save -> Edit
            onKeyDown={handleKeyDown}
            required
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={clickHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
