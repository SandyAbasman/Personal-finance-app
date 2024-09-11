import React from 'react'
import UpperBox from './UpperBox'
import data from '../utilis/data.json'

function RecurringBills() {
  return (
    <div className="flex  h-full w-full flex-col justify-start gap-10  bg-white  p-6 ">
      <UpperBox title="Recuring Bills" leftText="See Details" />

      <div className="flex flex-col gap-4 p-4 ">
        {data.transactions.slice(0, 18).map((trans) => {
          return (
            trans.recurring && (
              <div
                key={trans.name}
                className={`flex justify-between item-center sm:gap-1 border-l-4 border-green  p-4 rounded-lg flex-row bg-background `}
              >
                <div className="flex flex-row justify-start gap-2 items-center ">
                  <p className="text-nowrap text-sm text-blue/80 font-semibold">{trans.category}</p>
                </div>

                <div className="flex flex-col justify-start items-start  md:gap-1 ">
                  <p className={`text-xs font-bold `}>
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
