import React from 'react'
import data from '../utilis/data.json'
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia'
import UpperBox from './UpperBox'

export default function Pot() {
  return (
    <div className="flex  flex-col justify-between  gap-250 w-full h-auto item-start self-stretch  bg-white  p-400 rounded-lg">
      <UpperBox title="Pot" leftText="See Details" />
      <div className="flex  flex-col  md:flex-row justify-between gap-250 items-center w-full h-auto self-stretch ">
        <div className="md:w-[40%] md:h-[110px] w-full h-auto flex flex-row  bg-background  rounded-lg items-center gap-200 p-200 ">
          <i className="text-green">
            <LiaFileInvoiceDollarSolid size={40} />
          </i>
          <div className="flex flex-col justify-between gap-2 items-start">
            <p className=" text-blue/50 text-sm font-bold">Total Saved</p>
            <p className="font-extrabold text-[32px]  text-gray-900 "> ${data.pots[0].target}</p>
          </div>
        </div>

        <div className=" md:w-[60%]  w-full h-auto grid gap-200 flex-1 items-center  grid-cols-2 ">
          {data.pots.slice(0, 4).map((pot) => {
            return (
              <div
                key={pot.name}
                style={{ borderColor: pot.theme }}
                className={` flex flex-col pl-100 justify-between item-start   border-l-4  `}
              >
                <p className="text-grey-300 text-nowrap text-[12px] font-[400]  ">{pot.name}</p>
                <p className="font-extrabold text-xs  text-blue">${pot.total}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
