import React from 'react'
import Balance from '../component/Balance'
import data from '../utilis/data.json'
import Pot from '../component/Pot'
import Transaction from '../component/Transaction'
import BudgetBox from '../component/BudgetBox'
import RecurringBills from '../component/RecurringBills'

export default function Overview() {
  return (
    <div className="w-full h-auto flex flex-col gap-400 md:px-500 md:py-400 py-300 px-200 item-center self-stretch ">
      <h2 className="text-grey-900  font-[700] text-[2rem]">Overview</h2>
      <div className="  w-full h-auto flex md:flex-nowrap justify-between gap-150 md:flex-row  flex-col ">
        <Balance heading="Current balance" amount={data.balance.current} />
        <Balance heading="Income" amount={data.balance.income} />
        <Balance heading="Expenses" amount={data.balance.expenses} />
      </div>
      <div className="flex md:flex-row items-start max-width-[1440px]  flex-col w-full h-auto justify-between gap-300 self-stretch ">
        <div className="md:w-[50%]  w-full flex-col flex h-auto gap-300">
          <Pot />
          <Transaction />
        </div>

        <div className="flex rounded-lg flex-col h-full justify-between gap-300 items-start self-stretch flex-1 ">
          <BudgetBox />
          <RecurringBills />
        </div>
      </div>
    </div>
  )
}
