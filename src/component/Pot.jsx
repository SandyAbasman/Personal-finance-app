import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'

export default function Pot() {
  return (
    <div className="flex  flex-col gap-2 bg-white rounded">
      <div className="flex flex-row justify-between items-center p-2 ">
        <h2 className="font-bold text-xl text-blue">Pots</h2>
        <p className="text-nowrap flex flex-row justify-start items-center gap-1 text-blue/70">
          See details
          <span>
            <IoMdArrowDropright color="text-blue/70" />
          </span>
        </p>
      </div>
      <div></div>
    </div>
  )
}
