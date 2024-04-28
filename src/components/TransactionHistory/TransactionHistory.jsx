import css from "./TransactionHistory.module.css";
const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.tableTrans}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableMain}>
        {transactions.map((trans) => (
          <tr key={trans.id}>
            <td>{trans.type}</td>
            <td>{trans.amount}</td>
            <td>{trans.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TransactionHistory;
