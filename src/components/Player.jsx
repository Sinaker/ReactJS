import { useState, useRef } from "react"; //Using refs

export default function Player() {
  const inputRef = useRef();
  const [playerName, setPlayerName] = useState(null);

  function handleClick() {
    //Let's use the inputRef to access the input component
    //Now I can access all of the attributes of the connected component
    setPlayerName(inputRef.current.value); //inputRef always has an attribute of 'current'
    inputRef.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "unknown entity"}</h2>
      <p>
        <input
          type="text"
          ref={inputRef} //ref is a default arg in all react components
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              handleClick();
            }
          }}
        />
        <button onClick={handleClick}>Set Name</button>
        {/* Now we can get name in button click instead of every keystroke*/}
      </p>
    </section>
  );
}
