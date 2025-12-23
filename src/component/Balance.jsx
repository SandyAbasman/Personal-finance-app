import React from 'react'

export default function Balance({ heading, amount }) {
  const isCurrentBalance = heading.toLowerCase().includes('current balance')

  return (
    <div
      className={`flex flex-col gap-2 md:w-[35%] p-6 py-8 h-auto hover:bg-blue hover:cursor-pointer hover:text-offWhite rounded-lg transition-colors duration-200 ${
        isCurrentBalance ? 'bg-blue text-offWhite hover:bg-blue/90' : 'bg-white text-blue'
      }`}
    >
      <p className={`text-sm opacity-80 font-semibold`}>{heading}</p>
      <p className={`text-2xl md:text-3xl font-bold`}>${amount}</p>
    </div>
  )
}
