import React from "react";

function Transaction({transactions}) {
  const { date, description, category, amount } = transactions;
  
  return (
    <tr>
       <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      
    </tr>
  );
}

export default Transaction;
