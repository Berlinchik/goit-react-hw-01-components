import {HistoryTable, TableHead, TableData, TableRow} from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
    return <HistoryTable>
  <thead>
    <TableRow>
      <TableHead>Type</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead>Currency</TableHead>
    </TableRow>
  </thead>

        <tbody>
    {items.map(({id, type, amount, currency}) => (<TableRow key = {id}>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableRow>))}
  </tbody>
</HistoryTable>
}