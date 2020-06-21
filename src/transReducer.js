export default (state, action) => {

    switch (action.type) {

        case 'DELETE_TRANSACTION':
            return{
                ///we cannot change becuse value is deleted
                ///so have to create new state
                 ...state  ,        ///for return intial state
                transactions: state.transactions.filter(transaction => 
                    transaction.id !== action.payload)    ///change transaction values.give all the values except deleted
            }
        
        case "ADD_TRANSACTION": return{
            ////   action.payload (it is our new value added)
            /// state.transactions (gives all array values)
            ...state,  ///for return intial state
            transactions: [action.payload,...state.transactions]     
        }
        // case "EDIT_TANSACTION":
        //     const updatedTransaction = action.payload;

        //    updatedTransaction = state.transaction.map(transaction => {
        //       if (transaction.id === updatedTransaction.id) {
        //         return updatedTransaction;
        //       }
        //       return transaction;
        //     });
            
        default:
            return state;
    }
} 



 