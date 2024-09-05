import React from 'react'
import UpperBox from './UpperBox'
import data from '../utilis/data.json'

export default function Transaction() {
  return (
    <div className="flex  flex-col justify-between gap-6  bg-white  p-6 rounded-lg">
      <UpperBox title="Transaction" leftText="View More" />

      {data.transactions.slice(0, 5).map((trans) => {
        return (
          <div key={trans.name} className="flex  justify-between flex-col item-center md:flex-row">
            <div className="flex flex-row justify-start gap-2 items-center">
              <img className="w-6 h-6 rounded-full" src={trans.avatar} alt={trans.name} />
              <p className="text-nowrap text-sm text-blue font-semibold">{trans.name}</p>
            </div>

            <div className="flex md:flex-col flex-row gap-2 ">
              <p className="text-xs font-semibold ">${trans.amount}</p>
              <p className="text-xs text-blue/70">{trans.date}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
