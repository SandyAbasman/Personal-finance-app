import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import data from '../utilis/data.json'
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia'

export default function Pot() {
  return (
    <div className="flex  flex-col justify-between gap-6  bg-white  p-6 rounded-md">
      <div className="flex flex-row justify-between items-center  ">
        <h2 className="font-bold text-xl text-blue">Pots</h2>
        <p className="text-nowrap flex flex-row justify-start items-center gap-1 hover:cursor-pointer hover:text-blue/30 font-semibold text-blue/50">
          See details
          <span>
            <IoMdArrowDropright color="text-blue/70" />
          </span>
        </p>
      </div>
      <div className="flex flex-row justify-between  gap-6 items-center w-full h-auto ">
        <div className=" w-1/2 h-auto flex flex-row  bg-background justify-start rounded-md items-center gap-4 p-8">
          <i className="text-green">
            <LiaFileInvoiceDollarSolid size={50} />
          </i>
          <div className="flex flex-col justify-between gap-2 items-start">
            <p className=" text-blue/50  font-semibold">Total Saved</p>
            <p className="font-extrabold text-3xl  text-blue "> ${data.pots[0].target}</p>
          </div>
        </div>

        <div className=" w-1/2 h-auto grid gap-4 p-6 grid-cols-2 ">
          {data.pots.slice(0, 4).map((pot) => {
            return (
              <div
                key={pot.name}
                style={{ borderColor: pot.theme }}
                className={`w-1/2 flex flex-col p-1 justify-between item-start gap-1   border-l-4  `}
              >
                <p className="text-blue/70 text-nowrap font-semibold  ">{pot.name}</p>
                <p className="font-extrabold text-sm  text-blue">${pot.total}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
