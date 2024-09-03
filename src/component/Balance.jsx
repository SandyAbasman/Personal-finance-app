import React from 'react'

export default function Balance({ heading, amount }) {
  return (
    <div
      className={`flex flex-col gap-1  w-[30%] p-10 h-auto hover:bg-blue hover:cursor-pointer  hover:text-offWhite bg-white  rounded-md`}
    >
      <p className={`text-[10px] font-bold`}>{heading}</p>
      <p className={`text-2xl  font-bold`}>${amount}</p>
    </div>
  )
}
