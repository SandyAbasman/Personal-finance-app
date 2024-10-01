import React from 'react'
import data from '../utilis/data.json'
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia'
import UpperBox from './UpperBox'

export default function Pot() {
  return (
    <div className="flex  flex-col justify-between  gap-250 w-full h-auto item-start self-stretch  bg-white  p-400 rounded-lg">
      <UpperBox title="Pot" leftText="See Details" />
      <div className="flex  flex-col  md:flex-row justify-between gap-4 items-center w-full h-auto ">
        <div className="md:w-2/5 w-full h-auto flex flex-row  bg-background justify-start rounded-lg items-center gap-4 py-6 p-2">
          <i className="text-green">
            <LiaFileInvoiceDollarSolid size={40} />
          </i>
          <div className="flex flex-col justify-between gap-2 items-start">
            <p className=" text-blue/50 text-sm font-bold">Total Saved</p>
            <p className="font-extrabold text-2xl  text-blue "> ${data.pots[0].target}</p>
          </div>
        </div>

        <div className=" md:w-3/5 w-full h-auto grid gap-4  grid-cols-2 ">
          {data.pots.slice(0, 4).map((pot) => {
            return (
              <div
                key={pot.name}
                style={{ borderColor: pot.theme }}
                className={` flex flex-col pl-2 justify-between item-start   border-l-4  `}
              >
                <p className="text-blue/70 text-nowrap text-sm font-semibold  ">{pot.name}</p>
                <p className="font-extrabold text-xs  text-blue">${pot.total}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
