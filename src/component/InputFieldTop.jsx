import React from 'react'
import SearchIcon from '/assets/images/search-icon.svg'
import ListDownIcon from '/assets/images/icon-caret-down.svg'

export default function InputFieldTop() {
  return (
    <div className=" w-full h-auto flex justify-between gap-300 items-center self-stretch">
      <SearchInputField />

      <LeftInputFieldTop>
        <SortBy />
        <Category />
      </LeftInputFieldTop>
    </div>
  )
}

function SearchInputField() {
  return (
    <div className="flex   flex-row items-start relative  gap-50">
      <input
        type="text"
        placeholder="Search transaction"
        className=" w-[320px] px-250 py-150 rounded-lg bg-white border-background flex items-start gap-200 self-stretch  border"
      />
      <img
        src={SearchIcon}
        alt="search icon"
        className=" flex-shrink-0 absolute w-[1.5rem] h-[1.5rem] right-3 text-gray-900 opacity-50 top-4 "
      />
    </div>
  )
}

function LeftInputFieldTop({ children }) {
  return <div className="md:flex hidden items-center justify-end gap-300 ">{children}</div>
}

function SortBy() {
  return (
    <div className="flex items-center gap-100">
      <p className="text-gray-500 text-[14px] style-normal font-[400]">Sort by</p>
      <div className="flex  px-150 py-250 item-center self-stretch gap-200  border border-#98908B rounded-md">
        <p className="text-[14px] font-[400]">Latest</p>
        <img src={ListDownIcon} alt="icon down" />
      </div>
    </div>
  )
}

function Category() {
  return (
    <div className="flex items-center gap-100">
      <p className="text-gray-500 text-[14px] style-normal font-[400]">Category</p>
      <div className="flex  px-150 py-250 item-center self-stretch gap-200  border border-#98908B rounded-md">
        <p className="text-[14px] font-[400]">All Transactions</p>
        <img src={ListDownIcon} alt="icon down" />
      </div>
    </div>
  )
}
