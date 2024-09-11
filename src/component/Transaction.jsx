import React from 'react'
import UpperBox from './UpperBox'
import data from '../utilis/data.json'
import dayjs from 'dayjs'

export default function Transaction() {
  return (
    <div className="flex  flex-col justify-between gap-6  bg-white  p-6 rounded-lg">
      <UpperBox title="Transaction" leftText="View More" />

      {data.transactions.slice(0, 5).map((trans) => {
        return (
          <div key={trans.name} className="flex justify-between item-center sm:gap-2 p-2 flex-row">
            <div className="flex flex-row justify-start gap-2 items-center">
              <img className="w-6 h-6 rounded-full" src={trans.avatar} alt={trans.name} />
              <p className="text-nowrap text-sm text-blue font-semibold">{trans.name}</p>
            </div>

            <div className="flex flex-col justify-start items-start md:gap-1 ">
              <p
                className={`text-xs font-bold ${trans.amount > 0 ? 'text-[green]' : 'text-red-600'}`}
              >
                {trans.amount > 0 ? `+$${Math.abs(trans.amount)}` : `-$${Math.abs(trans.amount)}`}
              </p>
              <p className="text-xs text-blue/50">{dayjs(trans.date).format('DD MMM YYYY')}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
