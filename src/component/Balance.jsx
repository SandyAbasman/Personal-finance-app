import React from 'react'

export default function Balance({ heading, amount }) {
  return (
    <div
      className={`flex h-auto flex-col gap-1 rounded-lg bg-white p-6 py-8 hover:cursor-pointer hover:bg-blue hover:text-offWhite md:w-[35%]`}
    >
      <p className={`text-[0.8rem] font-bold opacity-80`}>{heading}</p>
      <p className={`text-2xl font-bold`}>${amount}</p>
    </div>
  )
}
