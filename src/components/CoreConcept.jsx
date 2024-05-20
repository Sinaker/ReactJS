import { CORE_CONCEPTS } from "../data";
import CoreConcepts from "./Components";

export default function CoreConcept() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {/* Dynamically listing CORE_CONCEPTS */}
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcepts key={concept.title} {...concept} />
        ))}
      </ul>
    </section>
  );
}
