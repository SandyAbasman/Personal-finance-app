import React from 'react'
import Balance from '../component/Balance'
import data from '../utilis/data.json'
import Pot from '../component/Pot'

export default function Overview() {
  return (
    <div className="w-full h-auto flex flex-col gap-3 p-4">
      <h2 className="text-blue font-bold pb-8  text-2xl">Overview</h2>
      <div className=" flex flex-wrap  flex-row gap-6">
        <Balance heading="Current balance" amount={data.balance.current} />
        <Balance heading="Income" amount={data.balance.income} />
        <Balance heading="Income" amount={data.balance.expenses} />
      </div>

      <div className="w-1/2 h-auto">
        <Pot />
      </div>
    </div>
  )
}
