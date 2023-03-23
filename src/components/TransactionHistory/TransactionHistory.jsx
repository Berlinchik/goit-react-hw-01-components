import PropTypes from 'prop-types';
import { HistoryTable, TableHead, TableData, TableRow } from './TransactionHistory.styled'

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
TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }),),
}