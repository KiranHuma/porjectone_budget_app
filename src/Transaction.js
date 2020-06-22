import React , {useContext}from 'react'
import { TransactionContext } from './transContext';

const Transaction = ({transaction}) => {
  const { deleteTransaction} = useContext(TransactionContext);
  
    const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li className={transaction.amount < 0 ? 'minus':'plus'}>
    {transaction.desc} <span>{sign}${Math.abs(transaction.amount)}</span>
    <button onClick={()=> deleteTransaction(transaction.id)} className="delete-btn">x</button>
     </li>
  )
}

export default Transaction