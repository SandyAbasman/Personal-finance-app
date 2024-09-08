import React from 'react'
import UpperBox from './UpperBox'

export default function BudgetBox() {
  return (
    <div className="flex  w-full flex-col justify-between md:gap-6 gap-2  h-auto  bg-white  p-6 rounded-lg">
      <UpperBox title="Budgets" leftText="See Details" />
    </div>
  )
}
