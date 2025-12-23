import React from 'react'
import UpperBox from './UpperBox'
import data from '../utilis/data.json'
import dayjs from 'dayjs'

export default function Transaction() {
  return (
    <div className="flex flex-col justify-between gap-6 bg-white p-6 rounded-lg">
      <UpperBox title="Transaction" leftText="View All" />

      <div className="flex flex-col gap-3">
        {data.transactions.slice(0, 5).map((trans) => {
          return (
            <div
              key={trans.name}
              className="flex justify-between items-center gap-2 p-2 flex-row hover:bg-background rounded-lg transition-colors"
            >
              <div className="flex flex-row justify-start gap-3 items-center">
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src={trans.avatar}
                  alt={trans.name}
                />
                <p className="text-nowrap text-sm text-blue font-semibold">{trans.name}</p>
              </div>

              <div className="flex flex-col justify-start items-end gap-1">
                <p
                  className={`text-sm font-bold ${trans.amount > 0 ? 'text-green' : 'text-red-600'}`}
                >
                  {trans.amount > 0
                    ? `+$${Math.abs(trans.amount).toFixed(2)}`
                    : `-$${Math.abs(trans.amount).toFixed(2)}`}
                </p>
                <p className="text-xs text-blue/50">{dayjs(trans.date).format('DD MMM YYYY')}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
