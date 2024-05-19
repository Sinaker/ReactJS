import ReactLogo from "../../assets/react-core-concepts.png";
import "./Header.css";

const adjectives = ["Fundamental", "Core", "Essential", "Foundational"];
const random_adjective =
  adjectives[Math.floor(Math.random() * adjectives.length)];

export default function Header() {
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
