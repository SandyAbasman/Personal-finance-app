import React from 'react'
import InputFieldTop from '../component/InputFieldTop'

export default function Transaction() {
  return (
    <div className="w-full h-auto flex flex-col bg-background gap-400 md:px-400 md:py-500 px-300 py-200 flex-1 ">
      <h2 className="text-grey-900  font-[700]   md:w-full max-w-30 px-100 py-0  text-[32px] ">
        Transaction
      </h2>

      <div className=" w-full h-auto flex flex-col gap-300 md:px-400 md:py-400 px-300 py-250  items-start self-stretch bg-white rounded-lg">
        <InputFieldTop />
      </div>
    </div>
  )
}
