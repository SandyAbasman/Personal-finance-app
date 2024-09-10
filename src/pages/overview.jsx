import React from 'react'
import Balance from '../component/Balance'
import data from '../utilis/data.json'
import Pot from '../component/Pot'
import Transaction from '../component/Transaction'
import BudgetBox from '../component/BudgetBox'
import RecurringBills from '../component/RecurringBills'

export default function Overview() {
  return (
    <div className="w-full h-auto flex flex-col gap-3 p-4">
      <h2 className="text-blue font-bold mb-1  text-2xl">Overview</h2>
      <div className="  w-full h-auto flex md:flex-nowrap justify-between gap-4 md:flex-row  flex-col ">
        <Balance heading="Current balance" amount={data.balance.current} />
        <Balance heading="Income" amount={data.balance.income} />
        <Balance heading="Expenses" amount={data.balance.expenses} />
      </div>
      <div className="flex md:flex-row   flex-col w-full h-auto justify-between gap-3 ">
        <div className="md:w-[50%]  w-full flex-col flex h-auto gap-3">
          <Pot />
          <Transaction />
        </div>

        <div className="flex flex-col h-full justify-between gap-2 w-[50%] ">
          <BudgetBox />
          <RecurringBills />
        </div>
      </div>
    </div>
  )
}
