import React from 'react'
import Balance from '../component/Balance'
import data from '../utilis/data.json'
import Pot from '../component/Pot'
import Transaction from '../component/Transaction'
import BudgetBox from '../component/BudgetBox'
import RecurringBills from '../component/RecurringBills'

export default function Overview() {
  return (
    <div className="flex h-auto w-full flex-col gap-3 p-4">
      <h2 className="mb-1 text-2xl font-bold text-blue">Overview</h2>
      <div className="flex h-auto w-full flex-col justify-between gap-2 md:flex-row md:flex-nowrap">
        <Balance heading="Current balance" amount={data.balance.current} />
        <Balance heading="Income" amount={data.balance.income} />
        <Balance heading="Expenses" amount={data.balance.expenses} />
      </div>
      <div className="flex h-auto w-full flex-col justify-between gap-3 md:flex-row">
        <div className="flex h-auto w-full flex-col gap-3 md:w-[50%]">
          <Pot />
          <Transaction />
        </div>

        <div className="flex h-full w-[50%] flex-col justify-between gap-2">
          <BudgetBox />
          <RecurringBills />
        </div>
      </div>
    </div>
  )
}
