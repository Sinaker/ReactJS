import { calculateInvestmentResults, formatter } from "../util/investment";

const titles = [
  "Year",
  "Investment Value",
  "Interest(Year)",
  "Total Interest",
  "Invested Captial",
];
export default function Results({ inputVals }) {
  const res = Object.values(inputVals).every((value) => value && value > 0)
    ? calculateInvestmentResults(inputVals)
    : null; //Calculate only if all values in object are non-null positive numbers

  const rows = [];
  for (let i = 0; res && i < res.length; i++) {
    res[i]["interest"] += i - 1 < 0 ? 0 : res[i - 1]["interest"]; //Cumulative Interest
    res[i]["annualInvestment"] +=
      i - 1 < 0
        ? inputVals["initialInvestment"]
        : res[i - 1]["annualInvestment"];

    rows.push(
      <tr key={i}>
        <td>{res[i]["year"]}</td>
        <td>{formatter.format(res[i]["valueEndOfYear"])}</td>
        <td>{formatter.format(res[i]["interest"])}</td>
        <td>{formatter.format(res[i]["interest"])}</td>
        <td>{formatter.format(res[i]["annualInvestment"])}</td>
      </tr>
    );
  }
  return (
    <table id="result">
      <thead>
        <tr>
          {titles.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>

      {rows.map((row) => row)}
    </table>
  );
}
