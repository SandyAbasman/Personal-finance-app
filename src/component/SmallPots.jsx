import React from 'react'

function SmallPots({ name, total, theme }) {
  return (
    <div
      className={`w-1/2 flex flex-col p-1 justify-between item-start gap-1   border-l-4 border-${theme} `}
    >
      <p className="text-blue/70 text-nowrap font-semibold  ">{name}</p>
      <p className="font-extrabold text-sm  text-blue">${total}</p>
    </div>
  )
}

export default SmallPots
