import React from 'react'
import InputFieldTop from '../component/InputFieldTop'

export default function Transaction() {
  return (
    <div className="w-full h-auto flex flex-col gap-3 p-4">
      <h2 className="text-blue font-bold mb-1  text-2xl">Transaction</h2>

      <div className=" w-full h-auto flex md:flex-nowrap justify-between gap-2 md:flex-row bg-white  flex-col ">
        <InputFieldTop />
      </div>
    </div>
  )
}
