import ReactLogo from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

const adjectives = ["Fundamental", "Core", "Essential", "Foundational"];
const random_adjective =
  adjectives[Math.floor(Math.random() * adjectives.length)];

function Header() {
  //This is a component in react, function must start with an uppercase letter and must return renderable content
  return (
    <header>
      <img src={ReactLogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {random_adjective} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}

function CoreConcepts({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
function App() {
  return (
    <div>
      {/* Calling custom Header function */}
      <Header></Header>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
