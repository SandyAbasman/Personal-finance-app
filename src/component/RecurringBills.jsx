import React from 'react'
import UpperBox from './UpperBox'
import data from '../utilis/data.json'

function RecurringBills() {
  return (
    <div className="flex  h-full w-full flex-col justify-start gap-10  bg-white  p-6 rounded-lg">
      <UpperBox title="Recuring Bills" leftText="See Details" />

      <div className="flex flex-col gap-2 ">
        {data.transactions.slice(0, 3).map((trans) => {
          return (
            <div
              key={trans.name}
              className={`flex justify-between item-center sm:gap-1 border-l-4  p-2 flex-row bg-background `}
            >
              <div className="flex flex-row justify-start gap-2 items-center ">
                <p className="text-nowrap text-sm text-blue font-semibold">{trans.category}</p>
              </div>

              <div className="flex flex-col justify-start items-start md:gap-1 ">
                <p className={`text-xs font-bold `}>
                  {trans.amount > 0 ? `$${Math.abs(trans.amount)}` : `$${Math.abs(trans.amount)}`}
                </p>
                <p className="text-xs text-blue/50"></p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RecurringBills
