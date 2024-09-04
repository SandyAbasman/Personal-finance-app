import React from 'react'
import Balance from '../component/Balance'
import data from '../utilis/data.json'
import Pot from '../component/Pot'
import Transaction from '../component/Transaction'

export default function Overview() {
  return (
    <div className="w-full h-auto flex flex-col gap-3 p-2">
      <h2 className="text-blue font-bold mb-1  text-2xl">Overview</h2>
      <div className=" flex flex-wrap  flex-row gap-6">
        <Balance heading="Current balance" amount={data.balance.current} />
        <Balance heading="Income" amount={data.balance.income} />
        <Balance heading="Expenses" amount={data.balance.expenses} />
      </div>
      <div className="flex flex-row w-full h-auto ">
        <div className="w-2/4 flex-col flex h-auto gap-6">
          <Pot />
          <Transaction />
        </div>

        <div className="flex flex-col w-/4">
          {/* <Budgets/>
  <RecurringBills/> */}
        </div>
      </div>
    </div>
  )
}
