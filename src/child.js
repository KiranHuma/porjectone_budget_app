import React, { useContext, useState } from 'react';
import { TransactionContext } from './transContext';
import Transaction from './Transaction';
import swal from 'sweetalert';



function Child(transaction) {
  let { transactions, addTransaction, deleteTransaction,editTransaction } = useContext(TransactionContext);
 // let sign = transaction.amount < 0 ? '-' : '+';
  let [desc, setDesc] = useState("");
  let [amount, setAmount] = useState(0);

  const handleAddition = (event) => {
    event.preventDefault();
    if (Number(amount) === 0) {
      alert("Please enter correct values");
      return false;
    }
    addTransaction({
      id:Math.floor(Math.random() * 100000000),
      desc,
      amount : +amount
      // desc: newDesc,
      // amount: Number(newAmount),
      
    });
    // setDesc('');
    // setAmount(0);
  }

  // deleteTransaction ({
  // amount: Number(newAmount),
  //desc: newDesc

  //});


  const getincome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0)
        income += transactions[i].amount
    }
    return income;
  }
  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0)
        expense += transactions[i].amount
    }
    return expense
  }
   const blnc = () => {
    let num = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0)
        swal('Your Expenses are more than income.You should keep check on your spendings');
        else
        for (var i = 0; i < transactions.length; i++) {
          if (transactions[i].amount > 0)
          swal('Blanced Account');
    }}
    
     
    }
  

  return (
    <div className="backgroundimg">
    <div className="container">

      <h1 className="text-center">Expense Tracker</h1>
  <h3 type="submit" onClick={blnc} >Your Balance <br /> ${getincome() + getExpense()}</h3>

      <div className="expense-container">
        <h3 className="income-h3">Income <br /> ${getincome()}</h3>
        <h3 className="expense-h3">Expense <br /> ${getExpense()}</h3>
      </div>
      {/* <>
      <h3>History</h3>
      <hr />
  
     
      <ul className="transaction-list" >
   {transactions.map(transaction => (<li  className={transaction.amount < 0 ? 'minus':'plus'} 
   key={transaction.id} transaction={transaction}>
  
    {transaction.desc} <span>${Math.abs(transaction.amount)}</span>
   <button onClick={()=> deleteTransaction(transaction.id)} className="delete-btn">x</button>
     </li>
   ))}    
</ul>
</> */}
      <h3 className="history_tex">History</h3>


      <ul className="list" >
      
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}
        className={transaction.amount < 0 ? 'minus':'plus'}/>))} 
    {transaction.desc} <span>{transaction.amount}</span>
    <button onClick={()=> deleteTransaction(transaction.id)} className="delete-btn">x</button>

       
       
      </ul>


      <hr />

      <form className="transaction-form" onSubmit={handleAddition}>
        <label>Enter Description <br />
          <input type="text"
            value={desc}
            placeholder="Description"
            onChange={(ev) => setDesc(ev.target.value)}
            required />
        </label>
        <br />
        <label>Enter Amount<br />
          <input type="number"
            value={amount}
            placeholder="Enter your amount"
            onChange={(ev) => setAmount(ev.target.value)}
            required />
        </label>
        <br />
        <button className="addtrans" type="submit" value="Add Transaction" >Add Transaction</button><button className="btn" onClick={() => deleteTransaction(transaction.id)}>Delete all History</button>
        <div>
          {/* <li className={transaction.amount > 0? "item-plus": "item-minus"}> */}
          {/* {transaction.text}<small>{transaction.amount>0? "Income added on ": "Expense added on "}</small> */}
          {/* <span>${transaction.amount}</span> */}

          {/* </li> */}
          {/* <button onClick={()=>editTransaction(transaction.id)}></button> */}
        </div>


        <h3 className="text-center-status" type="submit" onClick={blnc}>Click to see Status</h3>



      </form>
    </div>
    </div>
  );
}

export default Child;