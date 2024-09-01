import React from 'react'

export default function CurrentBalance({ heading, amount }) {
  return (
    <div className="flex flex-col gap-2  bg-blue">
      <p className="text-sm text-white/80">{heading}</p>
      <p className="text-2xl text-white font-bold">${amount}.00</p>
    </div>
  )
}
