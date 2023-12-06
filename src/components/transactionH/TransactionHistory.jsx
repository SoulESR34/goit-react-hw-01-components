import { TableHeader, Table, TableBody} from "./TransactionHistory.style";
const Transactions = (props) => {
  const transactionsData = props.transactions;
  return (
    <Table className="transaction-history">
      <TableHeader>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHeader>

      <TableBody>
        {transactionsData.map((data) => 
            <tr key={data.id}>
              <td>{data.type}</td>
              <td>{data.amount}</td>
              <td>{data.currency}</td>
            </tr>
          )}
      </TableBody>
    </Table>
  );
};

export default Transactions
