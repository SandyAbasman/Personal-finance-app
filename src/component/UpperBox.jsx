import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'

export default function UpperBox({ title, leftText }) {
  return (
    <div className="mt-1 flex flex-row items-center justify-between">
      <h2 className="text-xl font-bold text-blue">{title}</h2>
      <p className="flex flex-row items-center justify-start gap-1 text-nowrap text-sm font-semibold text-blue/50 hover:cursor-pointer hover:text-blue/30">
        {leftText}
        <span>
          <IoMdArrowDropright color="text-blue/70" />
        </span>
      </p>
    </div>
  )
}
