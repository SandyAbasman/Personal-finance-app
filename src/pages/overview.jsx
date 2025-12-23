import React from 'react'
import Balance from '../component/Balance'
import data from '../utilis/data.json'
import Pot from '../component/Pot'
import Transaction from '../component/Transaction'
import BudgetBox from '../component/BudgetBox'
import RecurringBills from '../component/RecurringBills'

export default function Overview() {
  return (
    <div className="w-full h-auto flex flex-col gap-6 p-4 md:p-6">
      <h2 className="text-blue font-bold text-2xl md:text-3xl">Overview</h2>
      <div className="w-full h-auto flex md:flex-nowrap justify-between gap-4 md:flex-row flex-col">
        <Balance heading="Current balance" amount={data.balance.current} />
        <Balance heading="Income" amount={data.balance.income} />
        <Balance heading="Expenses" amount={data.balance.expenses} />
      </div>
      <div className="flex md:flex-row flex-col w-full h-auto justify-between gap-4">
        <div className="md:w-[50%] w-full flex-col flex h-auto gap-4">
          <Pot />
          <Transaction />
        </div>

        <div className="flex flex-col h-full justify-between gap-4 md:w-[50%] w-full">
          <BudgetBox />
          <RecurringBills />
        </div>
      </div>
    </div>
  )
}
