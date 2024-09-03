import React from 'react'
import CurrentBalance from '../component/CurrentBalance'
import data from '../utilis/data.json'
import Pot from '../component/Pot'

export default function Overview() {
  return (
    <div className="w-full h-auto flex flex-col gap-3 p-4">
      <h2 className="text-blue font-bold pb-8  text-2xl">Overview</h2>
      <div className=" flex flex-wrap  flex-row gap-6">
        <CurrentBalance heading="Current balance" amount={data.balance.current} />
        <CurrentBalance heading="Income" amount={data.balance.income} />
        <CurrentBalance heading="Income" amount={data.balance.expenses} />
      </div>

      <div className="w-1/2 h-auto">
        <Pot />
      </div>
    </div>
  )
}
