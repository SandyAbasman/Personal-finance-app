import React from 'react'

export default function CurrentBalance({ heading, amount, bgColour, textColor }) {
  return (
    <div className={`flex flex-col gap-1  w-[30%] p-10 h-auto   bg-${bgColour}  rounded-md`}>
      <p className={`text-[10px] font-bold text-${textColor}`}>{heading}</p>
      <p className={`text-2xl text-${textColor}  font-bold`}>${amount}</p>
    </div>
  )
}
