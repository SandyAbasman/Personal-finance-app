import React from 'react'
import UpperBox from './UpperBox'
import data from '../utilis/data.json'

function RecurringBills() {
  return (
    <div className="flex h-full w-full flex-col justify-start gap-10 bg-white p-6">
      <UpperBox title="Recuring Bills" leftText="See Details" />

      <div className="flex flex-col gap-4 p-4">
        {data.transactions.slice(0, 18).map((trans) => {
          return (
            trans.recurring && (
              <div
                key={trans.name}
                className={`item-center flex flex-row justify-between rounded-lg border-l-4 border-green bg-background p-4 sm:gap-1`}
              >
                <div className="flex flex-row items-center justify-start gap-2">
                  <p className="text-nowrap text-sm font-semibold text-blue/80">{trans.category}</p>
                </div>

                <div className="flex flex-col items-start justify-start md:gap-1">
                  <p className={`text-xs font-bold`}>
                    {trans.amount > 0 ? `$${Math.abs(trans.amount)}` : `$${Math.abs(trans.amount)}`}
                  </p>
                </div>
              </div>
            )
          )
        })}
      </div>
    </div>
  )
}

// function RecuringItem(){
//     return(
//         <div className='bg-background flex flex-row justify-between items-center boder-l-4 p-2 rounded-lg'>
//             <p>Paid Bills</p>
//             <p>$190.00</p>

//         </div>
//     )
// }

export default RecurringBills
