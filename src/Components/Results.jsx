import { calculateInvestmentResults, formatter } from "../util/investment";

const titles = [
  "Year",
  "Investment Value",
  "Interest(Year)",
  "Total Interest",
  "Invested Capital",
];
export default function Results({ inputVals }) {
  const res = Object.values(inputVals).every((value) => value && value > 0)
    ? calculateInvestmentResults(inputVals)
    : null; //Calculate only if all values in object are non-null positive numbers

  const rows = [];
  let totalInterest = 0;
  let investedCapital = inputVals["initialInvestment"];
  for (let i = 0; res && i < res.length; i++) {
    totalInterest += res[i].interest;
    investedCapital += res[i].annualInvestment;

    rows.push(
      <tr key={i}>
        <td>{res[i]["year"]}</td>
        <td>{formatter.format(res[i]["valueEndOfYear"])}</td>
        <td>{formatter.format(res[i]["interest"])}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(investedCapital)}</td>
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

      <tbody>{rows.map((row) => row)}</tbody>
    </table>
  );
}
