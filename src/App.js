import React from 'react';
import './App.css';
import Child from './child';
import {TransactionProvider} from './transContext';
// import TransactionList from './TransactionList.js';


function App() {
  return (
   
     < TransactionProvider>     
      <Child/>
      {/* <TransactionList/> */}
     </TransactionProvider>
     
      
      
  );
}

export default App;
