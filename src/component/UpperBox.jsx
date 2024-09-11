import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'

export default function UpperBox({ title, leftText }) {
  return (
    <div className="flex flex-row justify-between items-center mt-1  ">
      <h2 className="font-bold text-xl text-blue">{title}</h2>
      <p className="text-nowrap text-sm flex flex-row justify-start items-center gap-1 hover:cursor-pointer hover:text-blue/30 font-semibold text-blue/50">
        {leftText}
        <span>
          <IoMdArrowDropright color="text-blue/70" />
        </span>
      </p>
    </div>
  )
}
