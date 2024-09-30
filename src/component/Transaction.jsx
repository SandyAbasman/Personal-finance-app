import React from 'react'
import UpperBox from './UpperBox'
import data from '../utilis/data.json'
import dayjs from 'dayjs'

export default function Transaction() {
  return (
    <div className="flex flex-col justify-between gap-6 rounded-lg bg-white p-6">
      <UpperBox title="Transaction" leftText="View More" />

      {data.transactions.slice(0, 5).map((trans) => {
        return (
          <div key={trans.name} className="item-center flex flex-row justify-between p-2 sm:gap-2">
            <div className="flex flex-row items-center justify-start gap-2">
              <img className="h-6 w-6 rounded-full" src={trans.avatar} alt={trans.name} />
              <p className="text-nowrap text-sm font-semibold text-blue">{trans.name}</p>
            </div>

            <div className="flex flex-col items-start justify-start md:gap-1">
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
