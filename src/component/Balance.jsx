import React from 'react'

export default function Balance({ heading, amount }) {
  return (
    <div
      className={`flex flex-col gap-1  md:w-[35%] p-6 py-8 h-auto hover:bg-blue hover:cursor-pointer   hover:text-offWhite bg-white  rounded-lg`}
    >
      <p className={`text-[0.8rem] opacity-80 font-bold`}>{heading}</p>
      <p className={`text-2xl   font-bold`}>${amount}</p>
    </div>
  )
}
