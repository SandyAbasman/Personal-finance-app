import React from 'react'

export default function Balance({ heading, amount }) {
  return (
    <div
      className={`flex flex-col gap-150  w-full p-300  h-auto hover:bg-blue hover:cursor-pointer items-start  hover:text-offWhite bg-white  rounded-lg`}
    >
      <p className={`text-[0.8rem] opacity-80 font-bold`}>{heading}</p>
      <p className={`text-2xl   font-bold`}>${amount}</p>
    </div>
  )
}
