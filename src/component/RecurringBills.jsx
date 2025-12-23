import React from 'react'
import UpperBox from './UpperBox'
import data from '../utilis/data.json'

function RecurringBills() {
  const recurringBills = data.transactions.filter((trans) => trans.recurring)

  // Calculate paid bills (negative amounts from recurring transactions)
  const paidBills = recurringBills
    .filter((bill) => bill.amount < 0)
    .reduce((sum, bill) => sum + Math.abs(bill.amount), 0)

  // Calculate total upcoming (all recurring bills)
  const totalUpcoming = recurringBills.reduce((sum, bill) => sum + Math.abs(bill.amount), 0)

  // Calculate due soon (recent recurring bills, last 30 days)
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
  const dueSoon = recurringBills
    .filter((bill) => new Date(bill.date) >= thirtyDaysAgo && bill.amount < 0)
    .reduce((sum, bill) => sum + Math.abs(bill.amount), 0)

  return (
    <div className="flex h-full w-full flex-col justify-start gap-6 bg-white p-6 rounded-lg">
      <UpperBox title="Recurring Bills" leftText="See Details" />

      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center gap-2 border-l-4 border-green p-4 rounded-lg flex-row bg-background">
          <p className="text-nowrap text-sm text-blue/80 font-semibold">Paid Bills</p>
          <p className="text-sm font-bold text-blue">${paidBills.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center gap-2 border-l-4 border-green p-4 rounded-lg flex-row bg-background">
          <p className="text-nowrap text-sm text-blue/80 font-semibold">Total Upcoming</p>
          <p className="text-sm font-bold text-blue">${totalUpcoming.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center gap-2 border-l-4 border-green p-4 rounded-lg flex-row bg-background">
          <p className="text-nowrap text-sm text-blue/80 font-semibold">Due Soon</p>
          <p className="text-sm font-bold text-blue">${dueSoon.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

// function RecuringItem(){
//     return(
//         <div className='bg-background flex flex-row justify-between items-center boder-l-4 p-2 rounded-lg'>
//             <p>Paid Bills</p>
//             <p>$190.00</p>

//         </div>
//     )
// }

export default RecurringBills
