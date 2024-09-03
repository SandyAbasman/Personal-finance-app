import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import data from '../utilis/data.json'
import { LiaFileInvoiceDollarSolid } from 'react-icons/lia'
import SmallPots from './SmallPots'

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
          <SmallPots
            name={data.pots[0].name}
            total={data.pots[0].total}
            theme={data.pots[0].theme}
          />
          <SmallPots
            name={data.pots[1].name}
            total={data.pots[1].total}
            theme={data.pots[1].theme}
          />
          <SmallPots
            name={data.pots[2].name}
            total={data.pots[2].total}
            theme={data.pots[2].theme}
          />
          <SmallPots
            name={data.pots[3].name}
            total={data.pots[3].total}
            theme={data.pots[3].theme}
          />
        </div>
      </div>
    </div>
  )
}
