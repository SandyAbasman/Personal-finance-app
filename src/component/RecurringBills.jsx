import React from 'react'
import UpperBox from './UpperBox'
import data from '../utilis/data.json'

function RecurringBills() {
  return (
    <div className="flex  h-full w-full flex-col justify-start gap-400  items-start rounded-lg self-stretch bg-white  p-400 ">
      <UpperBox title="Recuring Bills" leftText="See Details" />

      <div className="flex flex-col gap-150 self-stretch items-start w-full ">
        {data.transactions.slice(0, 18).map((trans) => {
          return (
            trans.recurring && (
              <div
                key={trans.name}
                className={`flex self-stretch justify-between item-center sm:gap-1 border-l-4 border-green  py-250 px-200 rounded-lg flex-row bg-background `}
              >
                <div className="flex flex-row justify-start gap-2 items-center ">
                  <p className="text-nowrap text-sm text-grey-500  text-[0.75rem] font-[400]">
                    {trans.category}
                  </p>
                </div>

                <div className="flex flex-col justify-start items-start  md:gap-1 ">
                  <p className={`text-[0.75rem]  text-grey-900 font-[700] `}>
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
