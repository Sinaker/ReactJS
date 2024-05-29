const inputs = [
  ["Initial Investment", "Annual Investment"],
  ["Expected Return", "Duration"],
];

const inputKeys = {
  "Initial Investment": "initialInvestment",
  "Annual Investment": "annualInvestment",
  "Expected Return": "expectedReturn",
  Duration: "duration",
};

export default function UserInput({ inputVal, onChange }) {
  return (
    <section id="user-input">
      {inputs.map((lines) => (
        <div key={lines} className="input-group">
          {lines.map((input) => (
            <p key={input}>
              <label htmlFor={input}>{input}</label>
              <input
                type="number"
                name={input}
                id={input}
                step="0.01"
                value={inputVal[inputKeys[input]]}
                onChange={
                  (event) => onChange(inputKeys[input], event.target.value) //By default event.target.value is a string, hence dealing this in handler function
                }
              />
            </p>
          ))}
        </div>
      ))}
    </section>
  );
}
