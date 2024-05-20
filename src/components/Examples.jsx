import TabButton from "./Header/TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";

const concepts = ["components", "jsx", "props", "state"];

export default function Examples() {
  const [Button, setButton] = useState();

  function handleSelect(button) {
    setButton(button);
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {/* Dyanmically listing TabButton */}
        {concepts.map((concept) => (
          <TabButton
            key={concept}
            isSelected={Button === concept}
            onSelect={() => handleSelect(concept)}
          >
            {concept.slice(0, 1).toUpperCase() + concept.slice(1)}
          </TabButton>
        ))}
      </menu>
      {!Button ? (
        <div id="tab-content">
          <p>Please select a button.</p>
        </div>
      ) : null}

      {Button && (
        <div id="tab-content">
          <h3>{EXAMPLES[Button].title}</h3>
          <p>{EXAMPLES[Button].description}</p>
          <pre>
            <code>{EXAMPLES[Button].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}
