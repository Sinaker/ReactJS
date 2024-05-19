import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/Components.jsx";
import TabButton from "./components/Header/TabButton.jsx";

import { useState } from "react";

const concepts = ["components", "jsx", "props", "state"];
function App() {
  const [Button, setButton] = useState();

  function handleSelect(button) {
    setButton(button);
  }
  return (
    <div>
      {/* Calling custom Header function */}
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* Dynamically listing CORE_CONCEPTS */}
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
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
            ;
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
      </main>
    </div>
  );
}

export default App;
