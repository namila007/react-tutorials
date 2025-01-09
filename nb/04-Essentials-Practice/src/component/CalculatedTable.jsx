import { calculateInvestmentResults, formatter } from "../util/investment.js";

export function CalculatedTable({ resultsData }) {
  const results = calculateInvestmentResults(resultsData);
  return (
    <table id="result" className="center">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Investment Capital</th>
        </tr>
      </thead>
      <tbody>
        {results &&
          results.map((yearData, i) => {
            console.log(yearData);
            const totalAmountInvested =
              resultsData.initialInvestment +
              yearData.annualInvestment * yearData.year;
            const totalInterest = yearData.valueEndOfYear - totalAmountInvested;
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
