import React, { createContext, useReducer } from "react";
import transReducer from './transReducer';

const initialTransactions = {
    transactions: [
       { id: 1, desc: 'Flower', amount: -20 },
           { id: 2, desc: 'Salary', amount: 300 },
        //    { id: 3, text: 'Book', amount: -10 },
        //   { id: 4, text: 'Camera', amount: 150 }
    ]
}
export const TransactionContext = createContext(initialTransactions);


export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(transReducer, initialTransactions)

    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION", //from reducer switch.type is action type..
            payload: id   //give the id to delete
        });
    }
    // function editTransaction(transaction){
    //     dispatch({
    //         type: 'EDIT_TANSACTION',
    //         payload: transaction
    //     });
    // }
    function addTransaction(transaction) {

        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transaction.amount,
                desc: transaction.desc

            },
        })
       


    }
    return (

        <TransactionContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
        //   editTransaction,


        }}>
            {children}
        </TransactionContext.Provider>
    )
}

